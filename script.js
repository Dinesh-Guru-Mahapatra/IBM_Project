// Hospital List aage
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("hospitalContainer");
  const filter = document.getElementById("cityFilter");

  if (container && hospitals) {
    function renderHospitals(city = "all") {
      container.innerHTML = "";
      let filtered = city === "all" ? hospitals : hospitals.filter(h => h.city === city);
      
      filtered.sort((a, b) => b.rating - a.rating);

      if (filtered.length === 0) {
        container.innerHTML = '<p class="no-results">No hospitals found in this city.</p>';
        return;
      }

      filtered.forEach(h => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <h3>${h.name}</h3>
          <p><strong>City:</strong> ${h.city}</p>
          <p><strong>Address:</strong> ${h.address}</p>
          <p><strong>Available Slots:</strong> ${h.slots}</p>
          <p><strong>Rating:</strong> ${h.rating} ★</p>
          <a href="hospital-details.html?id=${h.id}" class="btn btn-primary">View Details & Book</a>
        `;
        container.appendChild(card);
      });
    }

    renderHospitals();

    if (filter) {
      filter.addEventListener("change", () => {
        renderHospitals(filter.value);
      });
    }
  }

  // Hospital details page
  const detailsDiv = document.getElementById("hospitalInfo");
  if (detailsDiv) {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));
    const hospital = hospitals.find(h => h.id === id);

    if (hospital) {
      const stars = '★'.repeat(Math.floor(hospital.rating)) + 
                   (hospital.rating % 1 >= 0.5 ? '½' : '');
      
      detailsDiv.innerHTML = `
        <h2>${hospital.name}</h2>
        <p><strong>City:</strong> ${hospital.city}</p>
        <p><strong>Address:</strong> ${hospital.address}</p>
        <p><strong>Available Slots:</strong> ${hospital.slots}</p>
        <p><strong>Rating:</strong> ${stars} (${hospital.rating})</p>
        <div class="hospital-status">
          <span class="status ${hospital.slots > 5 ? 'available' : 'limited'}">
            ${hospital.slots > 5 ? 'Good Availability' : 'Limited Slots'}
          </span>
        </div>
      `;
    } else {
      detailsDiv.innerHTML = `
        <h2>Hospital Not Found</h2>
        <p>The hospital you're looking for doesn't exist or has been removed.</p>
        <a href="hospitals.html" class="btn btn-primary">Back to Hospitals</a>
      `;
    }

    const form = document.getElementById("bookingForm");
    if (form) {
      const dateInput = form.querySelector('input[type="date"]');
      const today = new Date().toISOString().split('T')[0];
      dateInput.setAttribute('min', today);
      
      form.addEventListener("submit", e => {
        e.preventDefault();

        const date = form.querySelector('input[type="date"]').value;
        const timeSlot = form.querySelector('select').value;
        
        if (!date) {
          alert('Please select a date for your appointment.');
          return;
        }

        sessionStorage.setItem('bookingDetails', JSON.stringify({
          hospitalName: hospital.name,
          date: date,
          timeSlot: timeSlot,
          hospitalId: hospital.id
        }));

        window.location.href = "booking.html";
      });
    }
  }
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('.card, .hospital-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
  });
  

});
document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });
      
      item.classList.toggle('active');
    });
  });
  
});