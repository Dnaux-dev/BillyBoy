import React from 'react'
import './hero.css';

const Hero = () => {
  return (
    <>
    
        <div id="carouselExampleCaptions" data-interval="500" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="./images/danger girl@2x.png" class="d-block w-100" alt="..." />
                    <div class="carousel-caption">
                        <h5 class="mb-4">Danger girl</h5>
                        <div class="feature">
                            <p>Action <span class="dn"></span>Sci-fi<span class="dn"></span> Afro-futurism <span class="dn"></span> Superheroes</p>
                        </div>
                        <p class="rating">
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                        </p>
                        <a href="#" class="btn btn-warning mt3">Read now</a>
                        <a href="#" class="btn btn-outline-warning mt3">Read Later</a>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="./images/danger girl@2x.png" class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5 class="mb-4">Danger girl</h5>
                        <div class="feature">
                            <p>Action <span class="dn"></span> Sci-fi <span class="dn"></span> Afro-futurism <span class="dn"></span> Superheroes</p>
                        </div>
                        <p class="rating">
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                        </p>
                        <a href="#" class="btn btn-warning mt3">Read now</a>
                        <a href="#" class="btn btn-outline-warning mt3">Read Later</a>
                </div>
                </div>
                <div class="carousel-item">
                <img src="./images/danger girl@2x.png" class="d-block w-100" alt="..." />
                <div class="carousel-caption">
                        <h5 class="mb-4">Danger girl</h5>
                        <div class="feature">
                            <p>Action <span class="dn"></span> Sci-fi <span class="dn"></span> Afro-futurism <span class="dn"></span> Superheroes</p>
                        </div>
                        <p class="rating">
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                        </p>
                        <a href="#" class="btn btn-warning ">Read now</a>
                        <a href="#" class="btn btn-outline-warning ">Read Later</a>
                </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <i class="fa-solid fa-angle-left"></i>
                <div class="visually-hidden">Previous</div>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                 <i class="fa-solid fa-angle-right"></i>
                <div class="visually-hidden">Next</div>
            </button>
        </div>
    
    
    
    </>
  )
}

export default Hero

{/* <div class="carousel-item">
<img src="img/girl.png" class="d-block w-100" alt="...">
<div class="carousel-caption ">
  <h5 class="mb-4">Danger girl</h5>
    <div class="feature">
      <p>Action <div class="dn"></div> Sci-fi <div class="dn"></div> Afro-futurism <div class="dn"></div> Superheroes</p>
    </div>
  <p class="rating">
    <i class='bx bxs-star'></i>
    <i class='bx bxs-star'></i>
    <i class='bx bxs-star'></i>
    <i class='bx bxs-star'></i>
    <i class='bx bxs-star'></i>
  </p>
  <a href="#" class="btn btn-warning mt3">Read now</a>
  <a href="#" class="btn btn-outline-warning mt3">Read Later</a>
</div>
</div> */}