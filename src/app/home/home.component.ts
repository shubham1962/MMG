import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-home',
  imports: [CommonModule, SlickCarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {

  heroSection = {
    title: "MMG",
    subtitle: "Maa Meenakshi Granites",
    description: `We deliver premium granite solutions for Flooring, combining
      durability, elegance, and expert craftsmanship. From countertops to
      custom designs, we bring nature's beauty to your space with lasting
      quality.`,
    productsTitle: "PRODUCTS",
    products: [
      { name: "Marble", image: "/assets/marble.png" },
      { name: "Sand Stone", image: "/assets/sandstone.png" },
      { name: "Granite", image: "/assets/granite.png" },
      { name: "Lime Stone", image: "/assets/Limestone.png" }
    ]
  };


  aboutUs = {
    title: "About Us",
    description: `Welcome to MMG – Maa Meenakshi Granites, where nature’s finest
      creations meet unparalleled craftsmanship. Established with a vision
      to bring the timeless beauty of natural stone to your spaces, we
      specialize in offering premium-quality granite that transforms every
      project into a masterpiece. At MMG, we pride ourselves on our
      commitment to quality, sustainability, and customer satisfaction.
      Sourced from the finest quarries, our granite collections boast
      durability, elegance, and a diverse range of colors and textures to
      suit every aesthetic.`,
    experience: "35+ Years of Experience",
    buttonText: "Read more",
    images: ["/assets/image1.png", "/assets/image2.png"]
  };


  galleryImages: string[] = [
    '/assets/gallery1.png',
    '/assets/gallery2.png',
    '/assets/gallery3.png'
  ];

  get duplicateImages(): string[] {
    return [...this.galleryImages, ...this.galleryImages]; // Duplicating images for infinite scrolling
  }

  testimonials = [
    { name: 'Angelica', image: '/assets/test1.png', quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra, turpis ut laoreet vehicula, sapien' },
    { name: 'Michael', image: '/assets/test2.png', quote: 'Ut enim ad hf sjr jdejd jie knej jxdk sorndj minima veniam, quis nostrum exercitationem ullam...' },
    { name: 'Sophia', image: '/assets/test1.png', quote: 'Nullam feugiat sem swirk angkek jujnx qwejnjc d sit amet dolor cursus, in venenatis elit...' },
    { name: 'David', image: '/assets/test2.png', quote: 'Aliquam erat volutpat.lorem asr sersj jmnf ieyrt loki thor iron sung naruto sasuke itachi Suspendisse potenti...' },
    { name: 'Emma', image: '/assets/test1.png', quote: 'Vestibulum at lacus malesuada, ichigo black clover one piece bleach tempus lorem ut, auctor ligula...' },
    { name: 'Liam', image: '/assets/test2.png', quote: 'Curabitur non turpis at libero death note demon slayer solo levelling dororo ullamcorper condimentum...' }
  ];


  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    dots: true,
    arrows: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };



  section1 = [
    {
      title: 'Granite Stone',
      subtitle: 'Cladding',
      features: [
        'Custom-fitted granite panels',
        'Weather-resistant and long-lasting materials',
        'Professional installation for a flawless finish',
      ],
      images: { main: '/assets/provide1.png', overlay: '/assets/provide2.png' }
    }
  ];
    section2 =[
      {
      title: 'Wholesale',
      subtitle: 'Granite Supply',
      features: [
        'Wide selection of premium granite',
        'Bulk supply for contractors and retailers',
        'Competitive pricing and reliable delivery',
      ],
      images: { main: '/assets/provide3.png', overlay: '/assets/provide4.png' },
    }
  ];

  ngAfterViewInit(): void {
    const leftImage = document.querySelector('.provide-image1') as HTMLElement;
    const leftImageOverlay = document.querySelector('.provide-overlay-img') as HTMLElement;
    const rightImage = document.querySelector('.provide-image3') as HTMLElement;
    const rightImageOverlay = document.querySelector('.provide-overlay-img-hid') as HTMLElement;
    const leftContent = document.querySelector('.provide-content') as HTMLElement;
    const rightContent = document.querySelector('.provide-content-hid') as HTMLElement;
    const bubble1 = document.querySelector('.bubble1') as HTMLElement;
    const bubble2 = document.querySelector('.bubble2') as HTMLElement;
    const leftContentContainer = document.getElementById('leftContent');

    if (leftImage && leftImageOverlay && rightImageOverlay && rightImage && leftContent && rightContent && bubble1 && bubble2 && leftContentContainer) {
      leftImage.addEventListener('click', () => {
        console.log("clicked");

        leftImage.classList.add('hide'); // Move right and fade out
        leftImageOverlay.classList.add('hide');
        leftContent.classList.add('fade-out'); // Fade out content

        setTimeout(() => {
          leftImage.style.display = 'none';
          leftImageOverlay.style.display = 'none';
          rightImage.style.display = 'flex';
          rightImageOverlay.style.display = 'flex';
          rightImage.classList.add('show'); // Show right image
          rightImageOverlay.classList.add('show');
          setTimeout(() => rightContent.classList.add('fade-in')); // Fade in right content
          bubble1.classList.remove('active');
          bubble2.classList.add('active');
          leftContentContainer.style.display = 'none';

        }, 620);
      });

      rightImage.addEventListener('click', () => {
        rightContent.classList.remove('fade-in'); // Fade out right content
        rightImage.classList.remove('show'); // Start fade-out
        rightImageOverlay.classList.remove('show');

        setTimeout(() => {
          rightImage.style.display = 'none';
          rightImageOverlay.style.display = 'none';
          leftImage.style.display = 'flex';
          leftImageOverlay.style.display = 'flex';
          leftContent.classList.remove('fade-out'); // Fade in left content
          setTimeout(() => leftImage.classList.remove('hide'));
          leftImageOverlay.classList.remove('hide');
          bubble2.classList.remove('active');
          bubble1.classList.add('active');
          leftContentContainer.style.display = '';

        }, 620);
      });

    }

  }

}
