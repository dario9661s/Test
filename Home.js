const sections = document.querySelectorAll(".lazyLoadHome");

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0
  }

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry=>{
        if (!entry.isIntersecting) {
            return
          }
          entry.target.classList.toggle("HomeFade")
          observer.unobserve(entry.target)
    })
}, options);
sections.forEach(section=>{
    observer.observe(section)
})
