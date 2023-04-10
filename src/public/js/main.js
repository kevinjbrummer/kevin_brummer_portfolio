  const sections = document.querySelectorAll('.section');

  const sectionOptions = {
    threshold: .25
  };

  const inverseOnScroll = new IntersectionObserver(
    function(entries, inverseOnScroll) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add('inverse', 'full-bleed');
          inverseOnScroll.unobserve(entry.target);
        }
      });
    }, 
    sectionOptions
  );

  sections.forEach(section => {
    inverseOnScroll.observe(section);
  });