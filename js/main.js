// =================================================================================================================
// Navbar
// let menu = document.querySelector(".box-menu");
// let listNav = document.querySelector(".box-navbar-collapse");
// menu.onclick = () => {
//   listNav.classList.toggle("open");
// };

// --------------
document.addEventListener("DOMContentLoaded", function () {
  let menu = document.querySelector(".box-menu");
  let listNav = document.querySelector(".box-navbar-collapse");

  if (menu && listNav) {
    menu.onclick = function () {
      listNav.classList.toggle("open");
    };
  } else {
    // console.error("Could not find menu or listNav element.");
  }
});

// --------------------------------------
$(document).ready(function () {
  $("#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4").click(function () {
    $(this).toggleClass("open");
  });
});

// --------------------------------------
// let aboutOffsetTop = $("#about").offset().top;
$(window).scroll(function () {
  let wScroll = $(window).scrollTop();

  if (wScroll > 130) {
    $(".box-nav").css("backgroundColor", "rgba(11, 31, 11, 1)");
  } else {
    $(".box-nav").css("backgroundColor", "rgba(11, 31, 11, 0.64)");
  }
});
// =================================================================================================================
// Services
var swiper = new Swiper(".mySwiperServices", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    440: {
      slidesPerView: 1.5,
      spaceBetween: 20,
      centeredSlides: true,
    },
    640: {
      slidesPerView: 1.5,
      spaceBetween: 20,
      centeredSlides: true,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
      centeredSlides: true,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

// =================================================================================================================
// Hair Stylists

var swiper = new Swiper(".mySwiperHairStylists", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    440: {
      slidesPerView: 1.5,
      spaceBetween: 20,
      centeredSlides: true,
    },
    640: {
      slidesPerView: 1.5,
      spaceBetween: 20,
      centeredSlides: true,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
      centeredSlides: true,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});
// =================================================================================================================
// phone otp
$(document).ready(function () {
  $("#btnLogIn").click(function () {
    $(".box-phone-login").hide();
    $(".box-otp-login").show();
  });
});

// =================================================================================================================
var swiper = new Swiper(".mySwiper-Details-Appointments", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// =================================================================================

$("#example-basic").steps({
  headerTag: "h3",
  bodyTag: "section",
  transitionEffect: "slideLeft",
  autoFocus: true,
  labels: {

    next: "Continue",
  }
  // onStepChanging: function (event, currentIndex, newIndex) { return false; },
});

// =================================================================================================================
// Select-services

$(document).ready(function () {
  var buttonsClicked = {};
  var subtotal = 0;
  var total = 0;

  // Fixed VAT Tax value
  var fixedVatTax = 20.0;

  // Initialize Sub-total-Services and total-Sub-Tax-Services
  $(".Sub-total-Services").text("0.00 SAR");
  $(".total-Sub-Tax-Services").text("0.00 SAR");

  // عند النقر على زر "add-Services"
  $(".add-Services").on("click", function () {
    var serviceItem = $(this).closest(".box-item-services-img-titel-dec");
    var productId = serviceItem.data("product-id");

    var serviceName = serviceItem.find(".name-Services").text();
    var serviceTime = serviceItem.find(".time-Services").text();
    var servicePrice = serviceItem.find(".price-Services").text();

    // Check if the product is already in the chosen list
    if (
      $(".box-item-chosen").find(`[data-product-id="${productId}"]`).length ===
      0
    ) {
      // If not, add the product
      $(this).addClass("active-check");

      // Add the class to the parent element
      serviceItem.addClass("active-Select-services");

      var overviewItem = $(
        '<div class="item-chosen" data-product-id="' + productId + '">'
      )
        .append(
          '<div><h4 class="name-chosen">' +
            serviceName +
            '</h4><span class="time-chosen">' +
            serviceTime +
            "</span></div>"
        )
        .append(
          '<div><h5 class="price-chosen">' + servicePrice + "</h5></div>"
        );

      $(".box-item-chosen").append(overviewItem);

      updateTotal();
    }
  });

  // Add click event for removing services
  $(document).on("click", ".remove-Services", function () {
    var productId = $(this)
      .closest(".box-item-services-img-titel-dec")
      .data("product-id");

    if (buttonsClicked[productId]) {
      $(this).removeClass("active-check");

      var serviceItem = $(this).closest(".box-item-services-img-titel-dec");

      // Remove the class from the parent element
      serviceItem.removeClass("active-Select-services");

      // Remove the selected service from the overview
      $(this).closest(".item-chosen").remove();

      subtotal -= parseFloat(
        serviceItem.find(".price-Services").text().replace(" SAR", "")
      );
      total = subtotal + fixedVatTax;

      updateTotal();

      buttonsClicked[productId] = false;
    }
  });

  function updateTotal() {
    var subtotal = 0;

    // Iterate through selected services and calculate subtotal
    $(".item-chosen").each(function () {
      var price = parseFloat(
        $(this).find(".price-chosen").text().replace(" SAR", "")
      );
      subtotal += price;
    });

    var total = subtotal + fixedVatTax;

    // Update Sub-total-Services and total-Sub-Tax-Services
    $(".Sub-total-Services").text(subtotal.toFixed(2) + " SAR");
    $(".total-Sub-Tax-Services").text(total.toFixed(2) + " SAR");
  }

  $(".btn-Continue").on("click", function () {
    alert("تم النقر على Continue");
  });
});

// ---------------------------------------------------------------------------
// Delete all selection

function clearLocationContent() {
  // Remove 'active-btn-Location' class from all buttons
  const allButtons = document.querySelectorAll(".btn-Location");
  allButtons.forEach((button) =>
    button.classList.remove("active-btn-Location")
  );

  // Remove 'active-Select-services' class from all relevant elements
  const activeSelectServices = document.querySelectorAll(
    ".active-Select-services"
  );
  activeSelectServices.forEach((element) =>
    element.classList.remove("active-Select-services")
  );

  // Remove 'active-check' class from all relevant elements
  const activeCheckElements = document.querySelectorAll(".active-check");
  activeCheckElements.forEach((element) =>
    element.classList.remove("active-check")
  );

  // Remove 'active-check' class from all relevant elements
  const activeBtnTime = document.querySelectorAll(".active-btn-time");
  activeBtnTime.forEach((element) =>
    element.classList.remove("active-btn-time")
  );

  // Remove 'active-check' class from all relevant elements
  const activeBtnLocation = document.querySelectorAll(".active-btn-Location");
  activeBtnLocation.forEach((element) =>
    element.classList.remove("active-btn-Location")
  );

  // Remove 'active-check' class from all relevant elements
  const activeBtnAppointment = document.querySelectorAll(
    ".active-btn-Appointment"
  );
  activeBtnAppointment.forEach((element) =>
    element.classList.remove("active-btn-Appointment")
  );

  // Clear the content of 'box-item-location'
  const boxItemLocation = document.querySelector(".box-item-location");
  boxItemLocation.innerHTML = "";

  // Clear the content of 'box-item-chosen'
  const boxItemChosen = document.querySelector(".box-item-chosen");
  boxItemChosen.innerHTML = "";

  // Clear the content of 'box-item-Barber2'
  const boxItemBarber2 = document.querySelector(".box-item-Barber2");
  boxItemBarber2.innerHTML = "";

  // Clear the content of 'box-item-chosen'
  const boxItemAppointment = document.querySelector(".box-item-Appointment");
  boxItemAppointment.innerHTML = "";

  // Clear the content of 'box-item-chosen'
  const boxItemAppointmentTime = document.querySelector(
    ".box-item-Appointment-time"
  );
  boxItemAppointmentTime.innerHTML = "";

  // Reset Sub-total-Services and total-Sub-Tax-Services to 0.00
  updateTotal(0.0, 0.0);

  // Reset tracking variables
  buttonsClicked = {};
  subtotal = 0;
  total = 0;

  $(".box-time").slideUp(1000);
}

// Call this function to add products again
function addServicesAgain() {
  // Reset the buttonsClicked object
  buttonsClicked = {};

  // Call the clearLocationContent to reset and clear existing products
  clearLocationContent();

  // Manually trigger the click event on the product buttons
  $(".add-Services").each(function () {
    $(this).trigger("click");
  });
}

// =================================================================================================================

// =================================================================================================================
// Location

function toggleActive(btn) {
  // Remove 'active-btn-Location' class from all buttons
  const allButtons = document.querySelectorAll(".btn-Location");
  allButtons.forEach((button) =>
    button.classList.remove("active-btn-Location")
  );

  // Add 'active-btn-Location' class to the clicked button
  btn.classList.add("active-btn-Location");

  // Update the content of the 'box-item-location'
  updateLocationContent(btn);
}

function updateLocationContent(btn) {
  // Get the content data from the clicked button
  const locationName = btn.querySelector(".name-location").textContent;
  const locationDesc = btn.querySelector(".dec-location").textContent;

  // Update the content of 'box-item-location'
  const boxItemLocation = document.querySelector(".box-item-location");
  boxItemLocation.innerHTML = `
    <div class="box-item-chosen-location">
      <h2>Location</h2>
      <div class="d-flex align-items-center gap-3">
        <div class="box-icon-Location">
          <i class="fa-light fa-location-dot"></i>
        </div>
        <div>
          <h4 class="titel-chosen-location">${locationName}</h4>
          <span class="dec-chosen-location">${locationDesc}</span>
        </div>
      </div>
    </div>
  `;
}

// --------------------------------------

// --------------------------------------
function updateTotal(subtotal, total) {
  // Update Sub-total-Services and total-Sub-Tax-Services
  const subtotalElement = document.querySelector(".Sub-total-Services");
  const totalElement = document.querySelector(".total-Sub-Tax-Services");

  subtotalElement.textContent = subtotal.toFixed(2) + " SAR";
  totalElement.textContent = total.toFixed(2) + " SAR";
}

// =================================================================================================================

// Barber
function toggleActiveBarber(btn) {
  // Remove 'active-btn-Barber' class from all buttons
  const allButtons = document.querySelectorAll(".btn-Barber");
  allButtons.forEach((button) => button.classList.remove("active-btn-Barber"));

  // Add 'active-btn-Barber' class to the clicked button
  btn.classList.add("active-btn-Barber");

  // Update the content of the 'box-item-Barber2'
  updateBarberContent(btn);
}

function updateBarberContent(btn) {
  // Get the content data from the clicked button
  const BarberName = btn.querySelector(".name-Barber-services").textContent;
  const imgBarber = btn.querySelector(".box-img-Barber-services img").src;

  // Update the content of 'box-item-Barber2'
  const boxItemBarber = document.querySelector(".box-item-Barber2");
  boxItemBarber.innerHTML = `
    <div class="box-item-chosen-location">
      <h2>Barber</h2>
      <div class="d-flex align-items-center gap-3">
        <div class="box-icon-Location">
          <img src="${imgBarber}" alt="">
        </div>
        <div>
          <h4 class="titel-chosen-location">${BarberName}</h4>
        </div>
      </div>
    </div>
  `;
}

// --------------------------------------
// Appointment

function toggleActiveAppointment(btn) {
  // Remove 'active-btn-Appointment' class from all buttons
  const allButtons = document.querySelectorAll(".btn-Appointment");
  allButtons.forEach((button) =>
    button.classList.remove("active-btn-Appointment")
  );

  // Add 'active-btn-Appointment' class to the clicked button
  btn.classList.add("active-btn-Appointment");

  // Update the content of the 'box-item-Appointment'
  updateAppointmentContent(btn);
}

function updateAppointmentContent(btn) {
  // Get the content data from the clicked button
  const appointmentName = btn.querySelector(".name-location").textContent;
  const appointmentDate = btn.querySelector(".dec-location").textContent;

  // Update the content of 'box-item-Appointment'
  const boxItemAppointment = document.querySelector(".box-item-Appointment");
  boxItemAppointment.innerHTML = `
    <div class="box-item-chosen-Appointment">
      <h2>Appointment</h2>
      <div class="d-flex align-items-center gap-3">
        <div class="box-icon-Location">
          <i class="fa-solid fa-calendar-days"></i>
        </div>
        <div>
          <h4><span class="days-chosen">${appointmentName}</span> <span class="date-chosen">${appointmentDate}</span></h4>
        </div>
      </div>
    </div>
  `;
}

// -------------------------------------------------------
function toggleActiveTime(btn) {
  // Remove 'active-btn-Time' class from all buttons
  const allButtons = document.querySelectorAll(".btn-time");
  allButtons.forEach((button) => button.classList.remove("active-btn-time"));

  // Add 'active-btn-Time' class to the clicked button
  btn.classList.add("active-btn-time");

  // Update the content of the 'box-item-Appointment-time'
  updateAppointmentTime(btn);
}

function updateAppointmentTime(btn) {
  // Get the content data from the clicked button
  const timeChosen = btn.textContent;

  // Update the content of 'box-item-Appointment-time'
  const boxItemAppointmentTime = document.querySelector(
    ".box-item-Appointment-time"
  );
  boxItemAppointmentTime.innerHTML = `
    <div class="box-item-chosen-Appointment">
      <h2>Time</h2>
      <div class="d-flex align-items-center gap-3">
        <div class="box-icon-Location">
          <i class="fa-light fa-clock"></i>
        </div>
        <div>
          <div class="time-chosen-Appointment">${timeChosen}</div>
        </div>
      </div>
    </div>
  `;
}
// ---------------------------------------------------------------
$(".btn-Appointment").click(function () {
  $(".box-time").slideDown(1000);
});

// =================================================================================================================
// slider Appointment
var swiper = new Swiper(".mySwiperAppointment", {
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    440: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },

    1224: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
  
});
// =================================================================================================================
// =================================================================================================================
// =================================================================================================================
