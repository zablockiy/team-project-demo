window.addEventListener('scroll', function () {
          var scroll = document.querySelector('.scroll-top');
          scroll.classList.toggle('active', window.scrollY > 500);
        });

        function scrrollToTop() {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        }