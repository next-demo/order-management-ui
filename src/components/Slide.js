import React from 'react';

const Slide = () => {
    return (
        <div>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://sslimages.shoppersstop.com/sys-master/root/h7a/h96/27825398480926/eoss_web02--mens%20--main-page-m-20220708-new.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://sslimages.shoppersstop.com/sys-master/root/h42/h8d/27952881860638/uspa_carousel-web--new-main-carousel-2022-07-27-ne-men-clp.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://sslimages.shoppersstop.com/sys-master/root/hfd/h14/27994618888222/Levis-Web---Copy%20%281%29--new--mens-clp-main-banne-2022-0802.jpg" class="d-block w-100" alt="..." />
                    </div>
                   
                 
                    <div class="carousel-item">
                        <img src="https://sslimages.shoppersstop.com/sys-master/root/hfd/h14/27994618888222/Levis-Web---Copy%20%281%29--new--mens-clp-main-banne-2022-0802.jpg" class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Slide;