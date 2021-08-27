const playAudio = () => {
  const audio = document.querySelector('#bg-song');

  audio && audio.play();
}

const showLoader = () => {
  const loader = document.querySelector('.loader');

  if(loader) {
    loader.classList.add('show');
    document.body.style.overflowY = 'hidden';
  }
}

const showContent = () => {
  const content = document.querySelector('.main-content')

  content && content.classList.add('show')
}

const hideLoader = () => {
  const loader = document.querySelector('.loader');

  if(loader) {
    loader.classList.remove('show');
  }

  loader.addEventListener('transitionend', () => {
    loader.style.display = 'none';
    document.body.style.overflowY = 'auto';
  })
}

const hideLoaderOnClick = () => {
  const button = document.querySelector('.loader__button')

  if(button){
    button.addEventListener('click', () => {
      hideLoader();
      showContent();
      guestBookSlider();

      setTimeout(() => {
        playAudio();
      }, 700)
    });
  }
}

const addLoaderPadding = () => {
  const loaderInner = document.querySelector('.loader__inner');

  if(loaderInner) {
    const broomImage = loaderInner.querySelector('.loader__broom-img');

    loaderInner.style.paddingBottom = broomImage.clientHeight - 120 + 'px';
  }
}

const counterControl = () => {
  const countdownDate = new Date('Aug 8, 2021 10:00:00').getTime();

  const interval = setInterval(() => {
    let now = new Date().getTime();
    
    let distance = countdownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector('#countdown-day').innerHTML = days;
    document.querySelector('#countdown-hour').innerHTML = hours;
    document.querySelector('#countdown-min').innerHTML = minutes;
    document.querySelector('#countdown-sec').innerHTML = seconds;

    if (distance < 0) {
      clearInterval(interval);
    }

  }, 1000);
}

const initSlider = () => {
  const slides = document.querySelectorAll('.guest-book__slide');

  slides && slides.forEach((slide, _i) => {
    _i === 0 ? slide.style.opacity = '1' : slide.style.opacity = '0';
  })
}

const guestBookSlider = () => {
  const sliderWrapper = document.querySelector('.guest-book__slider');

  if(sliderWrapper) {

    initSlider();

    const slides = document.querySelectorAll('.guest-book__slide');

    let index = 0;

    setInterval(() => {
      if(slides) {
        slides.forEach((slide, _i) => {
          _i === index ? slide.style.opacity = '1' : slide.style.opacity = '0';
        });
  
        index === slides.length - 1 ? index = 0 : index++;
      }
    }, 7000);

  }
}

const fetchCall = async (method = '', url = '', data = {}) => {
  let options = {
    method: method,
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    }
  }

  if (method !== 'GET' && method !== 'HEAD') options.body = JSON.stringify(data);

  const response = await fetch(url, options);
  return response;
}

const addAttend = () => {
  const attendForm = document.querySelector('#attendForm');

  if (attendForm) {
    const attendSubmitBtn = document.querySelector('#attendSubmitBtn');
    const name = attendForm.querySelector('input[name="name"]');
    const email = attendForm.querySelector('input[name="email"]');
    const address = attendForm.querySelector('input[name="address"]');
    const attend = attendForm.querySelector('input[name="attend"]');
    const notifArea = attendForm.querySelector('#attendNotifArea');
    const notifClose = attendForm.querySelector('#attendNotifClose');
    const notif = notifArea.querySelector('#attendNotif');

    attendSubmitBtn && attendSubmitBtn.addEventListener('click', (e) => {
      e.preventDefault();
  
      fetchCall('POST', '/api/add/attend', {
        'name': name.value,
        'email': email.value,
        'address': address.value,
        'attend': attend.value
      })
      .then(res => {
        return res.json();
      })
      .then(data => {
        if (!data.result) {
          let output = `Pendaftaran Gagal. <br />`;
          notifArea.className = '';
          notifArea.style.display = 'block';
          notifArea.classList.add('alert', 'alert-danger');
          for (const key in data.data) {
            [name, email, address].forEach(input => {
              key === input.name ? input.classList.add('is-invalid') : null;
            })
            output += `<span style="display: block;">${data.data[key]}</span>`
          }
          notif.innerHTML = output;
        } else {
          notifArea.className = '';
          notifArea.style.display = 'block';
          notifArea.classList.add('alert', 'alert-success');
          notif.innerHTML = `Pendaftaran Berhasil. <br /> 
            Silahkan cek email ${data.data.email} untuk mendapatkan BarCode.`;
          [name, email, address].forEach(input => {
            input.classList.remove('is-invalid');
            input.value = '';
          })
        }
      })
    });

    notifClose && notifClose.addEventListener('click', (e) => {
      e.preventDefault();
      notifArea.className = '';
      notifArea.style.display = 'none';
      notif.innerHTML = '';
    });
  } 
}

const addWishes = () => {
  const guestForm = document.querySelector('#guestForm');

  if (guestForm) {
    const guestSubmitBtn = document.querySelector('#guestSubmitBtn');
    const name = guestForm.querySelector('input[name="guest_name"]');
    const address = guestForm.querySelector('input[name="guest_address"]');
    const message = guestForm.querySelector('textarea[name="guest_message"]');
    const notifArea = guestForm.querySelector('#guestNotifArea');
    const notifClose = guestForm.querySelector('#guestNotifClose');
    const notif = notifArea.querySelector('#guestNotif');

    guestSubmitBtn && guestSubmitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      fetchCall('POST', '/api/add/wish', {
        'name': name.value,
        'address': address.value,
        'message' : message.value
      })
      .then(res => {
        return res.json();
      })
      .then(data => {
        if (!data.result) {
          let output = `Pesan Gagal Terkirim. <br />`;
          notifArea.className = '';
          notifArea.style.display = 'block';
          notifArea.classList.add('alert', 'alert-danger');
          for (const key in data.data) {
            [name, address, message].forEach(input => {
              key === input.name ? input.classList.add('is-invalid') : null;
            })
            output += `<span style="display: block;">${data.data[key]}</span>`
          }
          notif.innerHTML = output;
        } else {
          notifArea.className = '';
          notifArea.style.display = 'block';
          notifArea.classList.add('alert', 'alert-success');
          notif.innerHTML = `Pesan Behasil Terkirim. <br /> 
            Kami mengucapkan banyak terima kasih!`;
          [name, address, message].forEach(input => {
            input.classList.remove('is-invalid');
            input.value = '';
          });
          getWish();
        }
      })
    });

    notifClose && notifClose.addEventListener('click', (e) => {
      e.preventDefault();
      notifArea.className = '';
      notifArea.style.display = 'none';
      notif.innerHTML = '';
    });
  } 
}

const getWish = () => {
  const wishlistArea = document.querySelector('#wishlistArea');

  if (wishlistArea) {
    fetchCall('GET', '/api/wish')
      .then(res => {
        return res.json()
      })
      .then(data => {
        if (!data.result) console.log(data);
        else {
          let output = '';

          data.data.forEach((d) => {
            output += `
              <div class="wishlist__wish">
                <p class="wishlist__name">${d.name}</p>
                <p class="wishlist__message">${d.message}</p>
              </div>
            `;
          });

          wishlistArea.innerHTML = output;
        }
      })
  }
}

window.addEventListener('DOMContentLoaded', () => {
  hideLoaderOnClick();
  counterControl();
})

window.addEventListener('load', () => {
  showLoader();
  addAttend();
  addWishes();
  getWish();
})
