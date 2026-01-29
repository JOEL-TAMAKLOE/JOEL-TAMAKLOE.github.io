$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 50) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 80;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });
    // partie hadhi mta3 les vedio 
// Get modal elements
const modal = document.getElementById('videoModal');
const modalVideo = document.getElementById('modalVideo');
const videoSource = document.getElementById('videoSource');
const closeBtn = document.querySelector('.modal .close');

// Get all view buttons
const viewButtons = document.querySelectorAll('.view-btn');

// Function to open the modal and play video
function openModal(videoPath) {
  videoSource.src = videoPath; // Set video source
  modal.style.display = 'block'; // Show modal
  modalVideo.load(); // Load the video
  modalVideo.play(); // Play the video
}

// Function to close the modal
function closeModal() {
  modal.style.display = 'none'; // Hide modal
  modalVideo.pause(); // Pause the video
  modalVideo.currentTime = 0; // Reset video to start
}

// Event listener for "View" buttons
viewButtons.forEach(button => {
  button.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default action

    const videoPath = button.getAttribute('data-video'); // Get video path

    if (videoPath) {
      // If the button has a video, open the modal
      openModal(videoPath);
    } else {
      // If no video, redirect to the home page
      window.location.href = '#home'; // Change this to your homepage file
    }
  });
});

// Event listener for closing the modal
closeBtn.addEventListener('click', closeModal);

// Close modal when clicking outside the modal content
window.addEventListener('click', function(event) {
  if (event.target === modal) {
    closeModal();
  }
});
    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });

    // <!-- emailjs to mail contact form data -->
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault(); 
    
        var formData = new FormData(this);
    
        fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(result => {
            if (result.success) {
                alert("Form submitted successfully! ✅");
                document.getElementById("contact-form").reset();
            } else {
                alert("Form submission failed! ❌ Please try again.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Something went wrong. Try again!");
        });
    });    
    // <!-- emailjs to mail contact form data -->

});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | Joel Tamakloe";
            $("#smiley").attr("href", "/web-images/smiley.png");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#sad").attr("href", "/web-images/sad.png");
        }
    });

// <!-- typed js effect starts -->
// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: ["Data Analysis", "Data Science", "Machine Learning", "Deep Learning", "Artificial Intelligence", "Project management", "Cybersecurity", "Computer Vision"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});

// <!-- typed js effect ends -->

async function fetchData(type = "skills") {
    let response
    type === "skills" ?
        response = await fetch("./projects/skills.json")
        :
        response = await fetch("./projects/projects.json")
    const data = await response.json();
    return data;
}

function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
        <div class="bar">
              <div class="info">
                <img src=${skill.icon} alt="skill" />
                <span>${skill.name}</span>
              </div>
            </div>`
    });
    skillsContainer.innerHTML = skillHTML;
}

function showProjects(projects) {
    let projectsContainer = document.querySelector("#projects .box-container");
    let projectHTML = "";
    projects.slice(0, 10).filter(project => project.category != "android").forEach(project => {
        projectHTML += `
        <div class="box tilt">
      <img draggable="false" src="images/projects/${project.image}.png" alt="project" />
      <div class="content">
        <div class="tag">
        <h3>${project.name}</h3>
        </div>
        <div class="desc">
          <p>${project.desc}</p>
          <div class="btns">
            <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
            <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
          </div>
        </div>
      </div>
    </div>`
    });
    projectsContainer.innerHTML = projectHTML;

    // <!-- tilt js effect starts -->
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 15,
    });
    // <!-- tilt js effect ends -->

    /* ===== SCROLL REVEAL ANIMATION ===== */
    const srtop = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 1000,
        reset: true
    });

    /* SCROLL PROJECTS */
    srtop.reveal('.projects .box', { interval: 200 });

}

fetchData().then(data => {
    showSkills(data);
});

fetchData("projects").then(data => {
    showProjects(data);
});

// Initialisation de Tilt.js
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});

// Fonction pour cacher le preloader après le chargement avec animation
function loader() {
    document.querySelector('.loader-container').classList.add('fade-out');
    
    // Après avoir caché le preloader, on réactive le scroll
    document.body.style.overflow = 'auto';  // Réactive le scrolling
}

// Attendre que la page soit complètement chargée avant de masquer le preloader avec animation
window.onload = function () {
    // Désactiver le scroll pendant que le preloader est visible
    document.body.style.overflow = 'hidden'; // Empêche le scroll
    
    setTimeout(loader, 2000); // Retarder l'animation de disparition du preloader de 3500ms
};

document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}

// Start of Tawk.to Live Chat
    
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/696237141d5b7c197ccfa424/1jejqeaho';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
    
// End of Tawk.to Live Chat


/* SCROLL REVEAL ANIMATION*/
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* Part Hadhi SCROLL HOME */
srtop.reveal('.home .content h2', { delay: 500});
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });

srtop.reveal('.home .image', { delay: 600 });
srtop.reveal('.home .linkedin', { interval: 800 });
srtop.reveal('.home .github', { interval: 800 });
srtop.reveal('.home .facebook', { interval: 800 });
srtop.reveal('.home .instagram', { interval: 800 });


/*  Part Hadhi SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content h4', { delay: 200 });
srtop.reveal('.about .content .tag p', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });
srtop.reveal('.about .row .image1', { delay: 600 });


/* SCROLL SKILLS */
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 400 });

/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 200 });

/* SCROLL PROJECTS */
srtop.reveal('.projects .box', { interval: 200 });

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 400 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });

// ================= ALL PROJECTS CATEGORY FILTER =================
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".category-filters button");
  const projectBoxes = document.querySelectorAll(".box-container .box");

  if (!filterButtons.length) return; // page safety check

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const category = button.dataset.category;

      projectBoxes.forEach(box => {
        if (category === "all" || box.dataset.category === category) {
          box.style.display = "block";
        } else {
          box.style.display = "none";
        }
      });
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const articles = document.querySelectorAll(".article-content");

  articles.forEach((article) => {
    const text = article.innerText;
    const words = text.split(/\s+/).length;
    const readingTime = Math.ceil(words / 200); // average 200 WPM
    const meta = document.querySelector(".article-meta");

    if (meta) {
      const timeEl = document.createElement("span");
      timeEl.className = "reading-time";
      timeEl.innerText = ` · ${readingTime} min read`;
      meta.appendChild(timeEl);
    }
  });
});


/* MUSIC PLAYER */
document.addEventListener('DOMContentLoaded', function() {
  const music = document.getElementById('background-music');
    const songSource = document.getElementById('song-source');
    const playPauseButton = document.getElementById('play-pause-button');
    const volumeSlider = document.getElementById('volume-slider');
    const muteButton = document.getElementById('mute-button');
    const previousButton = document.getElementById('previous-button');
    const nextButton = document.getElementById('next-button');
    const songTitleElement = document.getElementById('song-title');
    const playbackModeButton = document.getElementById('playback-mode-button');

    const songs = [
    { title: 'Count on me', src: 'bg_music/Bruno Mars - Count_On_Me.mp3' },
    { title: 'It will Rain', src: 'bg_music/Bruno Mars - It_Will_Rain.mp3' },
    { title: 'Electra', src: 'bg_music/Electra.mp3' },
    { title: 'lost Ones', src: 'bg_music/J.Cole–Lost_Ones.mp3' },
    { title: 'Sailor man', src: 'bg_music/mr.sailor man-wizard.mp3' },
    { title: 'Home', src: 'bg_music/Phillip_Phillips-Homee.mp3' },
    { title: 'Lose Control', src: 'bg_music/Teddy-Swims-Lose_Control.mp3' },
    { title: 'Higher Power', src: 'bg_music/Wizard-Chan-Higher_Powers.mp3' },
    { title: 'Legacy', src: 'bg_music/Wizard-Chan–Legacy.mp3' },
    { title: 'Time traveler', src: 'bg_music/Wizard_Chan–Time_Traveler.mp3' },
    { title: 'Earth Song', src: 'bg_music/WIZARD CHAN- EARTH SONG.mp3' },
    { title: 'Loner', src: 'bg_music/Wizard_Chan_Ft. Joeboy– Loner.mp3' },
    ];

    let currentSongIndex = 0;
  let playbackMode = 'sequential'; // or 'random'

  // Load the first song
  songSource.src = songs[currentSongIndex].src;
  songTitleElement.textContent = songs[currentSongIndex].title;
  music.load();

  // Try to autoplay (may be blocked by browser)
  const playPromise = music.play();

  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        playPauseButton.textContent = 'Pause';
      })
      .catch(() => {
        // Autoplay blocked — wait for user interaction
        playPauseButton.textContent = 'Play';
      });
  }

  // Unlock audio for full playlist after first user interaction
  document.addEventListener('click', function unlockAudioOnce() {
    if (music.paused) {
      music.play().catch(() => console.log('Autoplay blocked'));
      playPauseButton.textContent = 'Pause';
    }
    document.removeEventListener('click', unlockAudioOnce);
  });

  // Play/Pause button functionality
  playPauseButton.addEventListener('click', () => {
    if (music.paused) {
      music.play();
      playPauseButton.textContent = 'Pause';
    } else {
      music.pause();
      playPauseButton.textContent = 'Play';
    }
  });

  // Volume slider functionality
  volumeSlider.addEventListener('input', () => {
    music.volume = volumeSlider.value;
  });

  // Mute button functionality
  muteButton.addEventListener('click', () => {
    music.muted = !music.muted;
    muteButton.textContent = music.muted ? 'Unmute' : 'Mute';
  });

  // Previous button functionality
  previousButton.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    songSource.src = songs[currentSongIndex].src;
    songTitleElement.textContent = songs[currentSongIndex].title;
    music.load();
    music.play();
    playPauseButton.textContent = 'Pause';
  });

  // Next button functionality
  nextButton.addEventListener('click', () => {
    if (playbackMode === 'random') {
      currentSongIndex = (currentSongIndex + 1) % songs.length;
    } else {
      currentSongIndex = Math.floor(Math.random() * songs.length);
    }
    songSource.src = songs[currentSongIndex].src;
    songTitleElement.textContent = songs[currentSongIndex].title;
    music.load();
    music.play();
    playPauseButton.textContent = 'Pause';
  });

  // Playback mode toggle functionality
  playbackModeButton.addEventListener('click', () => {
    if (playbackMode === 'sequential') {
      playbackMode = 'random';
      playbackModeButton.textContent = 'Random Mode: ON';
    } else {
      playbackMode = 'sequential';
      playbackModeButton.textContent = 'Random Mode: OFF';
    }
  });

  // Switch to the next song when the current one ends
  music.addEventListener('ended', () => {
    if (playbackMode === 'sequential') {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
    } else {
        currentSongIndex = Math.floor(Math.random() * songs.length);
    }

    songSource.src = songs[currentSongIndex].src;
    songTitleElement.textContent = songs[currentSongIndex].title;
    music.load();
    setTimeout(() => {
        music.play().catch(() => console.log('Autoplay blocked or file missing'));
    }, 100);
});

});
// End of music player functionality

// ================= ALL PROJECTS CATEGORY FILTER =================
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".category-filters button");
  const projectBoxes = document.querySelectorAll(".box-container .box");

  if (!filterButtons.length) return; // page safety check

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const category = button.dataset.category;

      projectBoxes.forEach(box => {
        if (category === "all" || box.dataset.category === category) {
          box.style.display = "block";
        } else {
          box.style.display = "none";
        }
      });
    });
  });
});
