<template>
<div>
<!--hero section start-->
<top-header :header_title="header_title"></top-header>
<section>
  <div class="container">
    <div class="row">
      <div class="col-lg-9 col-md-12 order-lg-1">
           <div class="row">
      <div class="col-lg-6 col-12">
        <div class="product-image">
                    <div class="product_img_box">
                        <img id="product_img" src='../../../static/assets/images/product/p11.jpg' data-zoom-image="../../../static/assets/images/product/p11.jpg" alt="product_img1" />
                        <a href="#" class="product_img_zoom" title="Zoom">
                            <span class="linearicons-zoom-in"></span>
                        </a>
                    </div>
                    <div id="pr_item_gallery" class="product_gallery_item slick_slider no-pb owl-carousel owl-2" data-dots="false" data-nav="false" data-items="4" data-md-items="2" data-sm-items="1">
                        <div class="item">
                            <a href="#" class="product_gallery_item active" data-image="../../../static/assets/images/product/p11.jpg" data-zoom-image="../../../static/assets/images/product/p11.jpg">
                                <img src="../../../static/assets/images/product/p11.jpg" alt="product_small_img1" />
                            </a>
                        </div>
                        <div class="item">
                            <a href="#" class="product_gallery_item" data-image="../../../static/assets/images/product/p13.jpg" data-zoom-image="../../../static/assets/images/product/p13.jpg">
                                <img src="../../../static/assets/images/product/p13.jpg" alt="product_small_img2" />
                            </a>
                        </div>
                        <div class="item">
                            <a href="#" class="product_gallery_item" data-image="../../../static/assets/images/product/p10.jpg" data-zoom-image="../../../static/assets/images/product/p10.jpg">
                                <img src="../../../static/assets/images/product/p10.jpg" alt="product_small_img3" />
                            </a>
                        </div>
                        <div class="item">
                            <a href="#" class="product_gallery_item" data-image="../../../static/assets/images/product/p15.jpg" data-zoom-image="../../../static/assets/images/product/p15.jpg">
                                <img src="../../../static/assets/images/product/p15.jpg" alt="product_small_img4" />
                            </a>
                        </div>
                        <div class="item">
                            <a href="#" class="product_gallery_item" data-image="../../../static/assets/images/product/p2.jpg" data-zoom-image="../../../static/assets/images/product/p2.jpg">
                                <img src="../../../static/assets/images/product/p2.jpg" alt="product_small_img4" />
                            </a>
                        </div>
                        <div class="item">
                            <a href="#" class="product_gallery_item" data-image="../../../static/assets/images/product/p5.jpg" data-zoom-image="../../../static/assets/images/product/p5.jpg">
                                <img src="../../../static/assets/images/product/p5.jpg" alt="product_small_img4" />
                            </a>
                        </div>
                    </div>
                </div>
      </div>
      <div class="col-lg-6 col-12 mt-5 mt-lg-0">
        <div class="product-details">
          <h1 class="h4 mb-0 font-w-6">Unpaired Running Shoes</h1>
          <div class="star-rating mb-4"><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i>
          </div> <span class="product-price h5 text-pink">$25.00 <del class="text-muted h6">$35.00</del></span>
          <ul class="list-unstyled my-4">
            <li><small>Availibility: <span class="text-green"> In Stock</span> </small>
            </li>
            <li class="font-w-4"><small>Categories :<span class="text-muted"> womens, clothing, dresses, footwear</span></small>
            </li>
          </ul>
          <p class="mb-4 desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. </p>
          <div class="d-sm-flex align-items-center mb-4">
            <div class="d-flex align-items-center mr-sm-4">
              <button class="btn-product btn-product-up"> <i class="las la-minus"></i>
              </button>
              <input class="form-product" type="number" name="form-product" value="1">
              <button class="btn-product btn-product-down"> <i class="las la-plus"></i>
              </button>
            </div>
            <select class="custom-select mt-3 mt-sm-0" id="inputGroupSelect02">
              <option selected>Size</option>
              <option value="1">XS</option>
              <option value="2">S</option>
              <option value="3">M</option>
              <option value="3">L</option>
              <option value="3">XL</option>
              <option value="3">XXL</option>
            </select>
            <div class="d-flex text-center ml-sm-4 mt-3 mt-sm-0">
              <div class="form-check pl-0 mr-2">
                <input type="radio" class="form-check-input" id="color-filter1" name="Radios">
                <label class="form-check-label" for="color-filter1" data-bg-color="#ffc107"></label>
              </div>
              <div class="form-check pl-0 mr-2">
                <input type="radio" class="form-check-input" id="color-filter2" name="Radios" checked>
                <label class="form-check-label" for="color-filter2" data-bg-color="#6d5b97"></label>
              </div>
              <div class="form-check pl-0 mr-2">
                <input type="radio" class="form-check-input" id="color-filter3" name="Radios">
                <label class="form-check-label" for="color-filter3" data-bg-color="#88b04b"></label>
              </div>
              <div class="form-check pl-0">
                <input type="radio" class="form-check-input" id="color-filter4" name="Radios">
                <label class="form-check-label" for="color-filter4" data-bg-color="#23a5a8"></label>
              </div>
            </div>
          </div>
          <div class="d-sm-flex align-items-center mt-5">
            <router-link to="shopping-cart" class="btn btn-primary btn-animated mr-sm-3 mb-3 mb-sm-0"><i class="las la-shopping-cart mr-2"></i>Add To Cart</router-link>
            <a class="btn btn-animated btn-dark" href="#"> <i class="lar la-heart mr-2 ic-1-2x"></i>Add To Wishlist
            </a>
          </div>
          
        </div>
      </div>
    </div>
   <div class="row pt-7">
      <div class="col-md-12">
        <div class="tab product-tab">
          <!-- Nav tabs -->
          <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist"> <a class="nav-item nav-link active ml-0" id="nav-tab1" data-toggle="tab" href="#tab3-1" role="tab" aria-selected="true">Description</a>
              <a class="nav-item nav-link" id="nav-tab2" data-toggle="tab" href="#tab3-2" role="tab" aria-selected="false">Specification</a>
              <a class="nav-item nav-link" id="nav-tab3" data-toggle="tab" href="#tab3-3" role="tab" aria-selected="false">Ratings and Reviews</a>
            </div>
          </nav>
          <!-- Tab panes -->
          <div class="tab-content pt-5 p-0">
            <div role="tabpanel" class="tab-pane fade show active" id="tab3-1">
              <div class="row align-items-center">
                
                <div class="col-md-12">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Donec a neque libero. Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Mauris vel tellus non nunc mattis lobortis. vulputate adipiscing cursus eu, suscipit id nulla. Donec a neque libero. Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. </p>
                  <p>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer enim purus, posuere at ultricies eu, placerat a felis. Suspendisse aliquet urna pretium eros convallis interdum. Quisque in arcu id dui vulputate mollis eget non arcu. Aenean et nulla purus. Mauris vel tellus non nunc mattis lobortis. vulputate adipiscing cursus eu, suscipit id nulla. Donec a neque libero. Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, vulputate adipiscing cursus eu, suscipit id nulla. Donec a neque libero. Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit.</p> 
                </div>
              </div>
            </div>
            <div role="tabpanel" class="tab-pane fade" id="tab3-2">
              <table class="table table-bordered mb-0">
                <tbody>
                  <tr>
                    <td>Size</td>
                    <td>Small, Medium, Large &amp; Extra Large</td>
                  </tr>
                  <tr>
                    <td>Color</td>
                    <td>Yellow, Red, Blue, Green &amp; Black</td>
                  </tr>
                  <tr>
                    <td>Chest</td>
                    <td>38 inches</td>
                  </tr>
                  <tr>
                    <td>Waist</td>
                    <td>20 cm</td>
                  </tr>
                  <tr>
                    <td>Length</td>
                    <td>35 cm</td>
                  </tr>
                  <tr>
                    <td>Fabric</td>
                    <td>Cotton, Silk &amp; Synthetic</td>
                  </tr>
                  <tr>
                    <td>Warranty</td>
                    <td>6 Months</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div role="tabpanel" class="tab-pane fade" id="tab3-3">
              <div class="row align-items-center">
                <div class="col-md-6">
                  <div class="bg-light-4 text-center p-5">
                    <h4>Based on 3 Reviews</h4>
                    <h5>Average</h5>
                    <h4>4.0</h4>
                    <h6>(03 Reviews)</h6>
                  </div>
                </div>
                <div class="col-md-6 mt-3 mt-lg-0">
                  <div class="rating-list">
                    <div class="d-flex align-items-center mb-2">
                      <div class="text-nowrap mr-3">5 Star</div>
                      <div class="w-100">
                        <div class="progress" style="height: 5px;">
                          <div class="progress-bar bg-success" role="progressbar" style="width: 90%;" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </div><span class="text-muted ml-3">90%</span>
                    </div>
                    <div class="d-flex align-items-center mb-2">
                      <div class="text-nowrap mr-3">4 Star</div>
                      <div class="w-100">
                        <div class="progress" style="height: 5px;">
                          <div class="progress-bar bg-success" role="progressbar" style="width: 60%;" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </div><span class="text-muted ml-3">60%</span>
                    </div>
                    <div class="d-flex align-items-center mb-2">
                      <div class="text-nowrap mr-3">3 Star</div>
                      <div class="w-100">
                        <div class="progress" style="height: 5px;">
                          <div class="progress-bar bg-success" role="progressbar" style="width: 40%;" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </div><span class="text-muted ml-3">40%</span>
                    </div>
                    <div class="d-flex align-items-center mb-2">
                      <div class="text-nowrap mr-3">2 Star</div>
                      <div class="w-100">
                        <div class="progress" style="height: 5px;">
                          <div class="progress-bar bg-warning" role="progressbar" style="width: 20%;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </div><span class="text-muted ml-3">20%</span>
                    </div>
                    <div class="d-flex align-items-center mb-2">
                      <div class="text-nowrap mr-3">1 Star</div>
                      <div class="w-100">
                        <div class="progress" style="height: 5px;">
                          <div class="progress-bar bg-danger" role="progressbar" style="width: 10%;" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </div><span class="text-muted ml-3">10%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              
              <div class="comment-area mt-5">
                    <div class="content_title">
                        <h4>Comments</h4>
                    </div>
                    <ul class="list_none comment_list">
                        <li class="comment_info">
                            <div class="d-flex">
                                <div class="comment_user">
                                    <img src="../../../static/assets/images/thumbnail/member1.png" alt="user2">
                                </div>
                                <div class="comment_content">
                                    <div class="d-flex">
                                        <div class="meta_data">
                                            <h6><a href="#">Saraha Doe</a></h6>
                                            <div class="comment-time">March 5, 2020, 07:35 PM</div>
                                        </div>
                                        <div class="ml-auto">
                                            <a href="#" class="comment-reply"><i class="las la-arrow-left"></i> Reply</a>
                                        </div>
                                    </div>
                                    <p>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Nulla quis lorem ut libero malesuada feugiat. Proin eget tortor risus. Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                            <ul class="children">
                            	<li class="comment_info">
                                    <div class="d-flex">
                                        <div class="comment_user">
                                            <img src="../../../static/assets/images/thumbnail/member2.png" alt="user3">
                                        </div>
                                        <div class="comment_content">
                                            <div class="d-flex align-items-md-center">
                                                <div class="meta_data">
                                                    <h6><a href="#">Stephen Smith</a></h6>
                                                    <div class="comment-time">April 19, 2020, 01:45 PM</div>
                                                </div>
                                                <div class="ml-auto">
                                                    <a href="#" class="comment-reply"><i class="las la-arrow-left"></i> Reply</a>
                                                </div>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, ex, quisquam. Nulla excepturi sint iusto incidunt sed omnis expedita, commodi dolores. Debitis nemo animi quia deleniti commodi nesciunt illo.</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li class="comment_info">
                            <div class="d-flex">
                                <div class="comment_user">
                                    <img src="../../../static/assets/images/thumbnail/member3.png" alt="user4">
                                </div>
                                <div class="comment_content">
                                    <div class="d-flex">
                                        <div class="meta_data">
                                            <h6><a href="#">Karla Anderson </a></h6>
                                            <div class="comment-time">may 25, 2020, 05:20 PM</div>
                                        </div>
                                        <div class="ml-auto">
                                            <a href="#" class="comment-reply"><i class="las la-arrow-left"></i> Reply</a>
                                        </div>
                                    </div>
                                    <p>Aliquam vehicula neque ac nibh suscipit ultrices. Morbi interdum accumsan arcu nec scelerisque. Nulla quis lorem ut libero malesuada feugiat. Proin eget tortor risus. Donec rutrum congue leo eget malesuada.</p>
                                </div>
                            </div>
                        </li>
                    </ul>
          <div class="mt-8 bg-light-4 rounded p-5">
                <div class="section-title mb-3">
                  <h4>Add a review</h4>
                </div>
                <form id="contact-form" class="row" method="post" action="http://themesground.com/flipmarto/demo/html/contact.php">
                  <div class="messages"></div>
                  <div class="form-group col-sm-6">
                    <input id="form_name" type="text" name="name" class="form-control" placeholder="Your Name" required data-error="Name is required.">
                    <div class="help-block with-errors"></div>
                  </div>
                  <div class="form-group col-sm-6">
                    <input id="form_email" type="email" name="email" class="form-control" placeholder="Your Email Address" required data-error="Valid email is required.">
                    <div class="help-block with-errors"></div>
                  </div>
                  <div class="form-group clearfix col-12">
                    <select class="custom-select form-control">
                      <option value="">Rating -- Select</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                  <div class="form-group col-12">
                    <textarea id="form_message" name="message" class="form-control" placeholder="Write Your Review" rows="4" required data-error="Please,leave us a review."></textarea>
                    <div class="help-block with-errors"></div>
                  </div>
                  <div class="col-12">
                    <button class="btn btn-primary btn-animated mt-1">Post Review</button>
                  </div>
                </form>
              </div>
          <div></div>
        </div>
              
              
              
            </div>
          </div>
        </div>
      </div>
    </div> 
    
    <div class="row justify-content-left text-left pt-5">
      <div class="col-lg-8 col-md-10">
        <div class="mb-0">
          <h4 class="mb-0 font-w-6">Related Products</h4>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col p-0">
        <div class="owl-carousel no-pb owl-2" data-dots="true" data-nav="false" data-items="3" data-md-items="2" data-sm-items="1">
          <div class="item">
            <div class="card product-card card--default"> <a class="card-img-hover d-block" href="product-left-image.html"> <img class="card-img-top card-img-back" src="../../../static/assets/images/product/p2.jpg" alt="..."> <img class="card-img-top card-img-front" src="../../../static/assets/images/product/p2_hover.jpg" alt="..."> </a>
                      <div class="card-icons">
                        <div class="card-icons__item"> <a href="#" data-toggle="tooltip" data-placement="left" title="" data-original-title="Add to wishlist"> <i class="lar la-heart"></i> </a> </div>
                        <div class="card-icons__item"> <a href="#" data-toggle="tooltip" data-placement="left" title="" data-original-title="Quick View"><span data-target="#quick-view" data-toggle="modal"> <i class="ion-ios-search-strong"></i></span> </a> </div>
                        <div class="card-icons__item"> <a href="#" data-toggle="tooltip" data-placement="left" title="" data-original-title="Compare"> <i class="las la-random"></i> </a> </div>
                      </div>
                      <div class="card-info">
                        <div class="card-body">
                          <div class="product-title font-w-5"><a class="link-title" href="product-left-image.html">Unpaired Running Shoes</a> </div>
                          <div class="mt-1"> <span class="product-price text-pink"><del class="text-muted">$35.00</del> $25.00</span>
                            <div class="star-rating"><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i> </div>
                          </div>
                        </div>
                        <div class="card-footer bg-transparent border-0">
                          <div class="product-link d-flex align-items-center justify-content-center">
                            <button class="btn-cart btn btn-pink mx-3" type="button"><i class="las la-shopping-cart mr-1"></i> Add to cart </button>
                          </div>
                        </div>
                      </div>
                    </div>
          </div>
          <div class="item">
            <div class="card product-card card--default"> <a class="card-img-hover d-block" href="product-left-image.html"> <img class="card-img-top card-img-back" src="../../../static/assets/images/product/p11.jpg" alt="..."> <img class="card-img-top card-img-front" src="../../../static/assets/images/product/p11_hover.jpg" alt="..."> </a>
                      <div class="card-icons">
                        <div class="card-icons__item"> <a href="#" data-toggle="tooltip" data-placement="left" title="" data-original-title="Add to wishlist"> <i class="lar la-heart"></i> </a> </div>
                        <div class="card-icons__item"> <a href="#" data-toggle="tooltip" data-placement="left" title="" data-original-title="Quick View"><span data-target="#quick-view" data-toggle="modal"> <i class="ion-ios-search-strong"></i></span> </a> </div>
                        <div class="card-icons__item"> <a href="#" data-toggle="tooltip" data-placement="left" title="" data-original-title="Compare"> <i class="las la-random"></i> </a> </div>
                      </div>
                      <div class="card-info">
                        <div class="card-body">
                          <div class="product-title font-w-5"><a class="link-title" href="product-left-image.html">Unpaired Running Shoes</a> </div>
                          <div class="mt-1"> <span class="product-price text-pink"><del class="text-muted">$35.00</del> $25.00</span>
                            <div class="star-rating"><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i> </div>
                          </div>
                        </div>
                        <div class="card-footer bg-transparent border-0">
                          <div class="product-link d-flex align-items-center justify-content-center">
                            <button class="btn-cart btn btn-pink mx-3" type="button"><i class="las la-shopping-cart mr-1"></i> Add to cart </button>
                          </div>
                        </div>
                      </div>
                    </div>
          </div>
          <div class="item">
            <div class="card product-card card--default"> <a class="card-img-hover d-block" href="product-left-image.html"> <img class="card-img-top card-img-back" src="../../../static/assets/images/product/p15.jpg" alt="..."> <img class="card-img-top card-img-front" src="../../../static/assets/images/product/p15_hover.jpg" alt="..."> </a>
                      <div class="card-icons">
                        <div class="card-icons__item"> <a href="#" data-toggle="tooltip" data-placement="left" title="" data-original-title="Add to wishlist"> <i class="lar la-heart"></i> </a> </div>
                        <div class="card-icons__item"> <a href="#" data-toggle="tooltip" data-placement="left" title="" data-original-title="Quick View"><span data-target="#quick-view" data-toggle="modal"> <i class="ion-ios-search-strong"></i></span> </a> </div>
                        <div class="card-icons__item"> <a href="#" data-toggle="tooltip" data-placement="left" title="" data-original-title="Compare"> <i class="las la-random"></i> </a> </div>
                      </div>
                      <div class="card-info">
                        <div class="card-body">
                          <div class="product-title font-w-5"><a class="link-title" href="product-left-image.html">Unpaired Running Shoes</a> </div>
                          <div class="mt-1"> <span class="product-price text-pink"><del class="text-muted">$35.00</del> $25.00</span>
                            <div class="star-rating"><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i> </div>
                          </div>
                        </div>
                        <div class="card-footer bg-transparent border-0">
                          <div class="product-link d-flex align-items-center justify-content-center">
                            <button class="btn-cart btn btn-pink mx-3" type="button"><i class="las la-shopping-cart mr-1"></i> Add to cart </button>
                          </div>
                        </div>
                      </div>
                    </div>
          </div>
          <div class="item">
            <div class="card product-card card--default">
                        <div class="hot-label">Hot</div>
                        <a class="card-img-hover d-block" href="product-left-image.html"> <img class="card-img-top card-img-back" src="../../../static/assets/images/product/p5.jpg" alt="..."> <img class="card-img-top card-img-front" src="../../../static/assets/images/product/p5_hover.jpg" alt="..."> </a>
                        <div class="card-icons">
                          <div class="card-icons__item"> <a href="#" data-toggle="tooltip" data-placement="left" title="" data-original-title="Add to wishlist"> <i class="lar la-heart"></i> </a> </div>
                          <div class="card-icons__item"> <a href="#" data-toggle="tooltip" data-placement="left" title="" data-original-title="Quick View"><span data-target="#quick-view" data-toggle="modal"> <i class="ion-ios-search-strong"></i></span> </a> </div>
                          <div class="card-icons__item"> <a href="#" data-toggle="tooltip" data-placement="left" title="" data-original-title="Compare"> <i class="las la-random"></i> </a> </div>
                        </div>
                        <div class="card-info">
                          <div class="card-body">
                            <div class="product-title font-w-5"><a class="link-title" href="product-left-image.html">Unpaired Running Shoes</a> </div>
                            <div class="mt-1"> <span class="product-price text-pink"><del class="text-muted">$35.00</del> $25.00</span>
                              <div class="star-rating"><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i> </div>
                            </div>
                          </div>
                          <div class="card-footer bg-transparent border-0">
                            <div class="product-link d-flex align-items-center justify-content-center">
                              <button class="btn-cart btn btn-pink mx-3" type="button"><i class="las la-shopping-cart mr-1"></i> Add to cart </button>
                            </div>
                          </div>
                        </div>
                      </div>
          </div>
          <div class="item">
            <div class="card product-card card--default"> <a class="card-img-hover d-block" href="product-left-image.html"> <img class="card-img-top card-img-back" src="../../../static/assets/images/product/p6.jpg" alt="..."> <img class="card-img-top card-img-front" src="../../../static/assets/images/product/p6_hover.jpg" alt="..."> </a>
                        <div class="card-icons">
                          <div class="card-icons__item"> <a href="#" data-toggle="tooltip" data-placement="left" title="" data-original-title="Add to wishlist"> <i class="lar la-heart"></i> </a> </div>
                          <div class="card-icons__item"> <a href="#" data-toggle="tooltip" data-placement="left" title="" data-original-title="Quick View"><span data-target="#quick-view" data-toggle="modal"> <i class="ion-ios-search-strong"></i></span> </a> </div>
                          <div class="card-icons__item"> <a href="#" data-toggle="tooltip" data-placement="left" title="" data-original-title="Compare"> <i class="las la-random"></i> </a> </div>
                        </div>
                        <div class="card-info">
                          <div class="card-body">
                            <div class="product-title font-w-5"><a class="link-title" href="product-left-image.html">Unpaired Running Shoes</a> </div>
                            <div class="mt-1"> <span class="product-price text-pink"><del class="text-muted">$35.00</del> $25.00</span>
                              <div class="star-rating"><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i> </div>
                            </div>
                          </div>
                          <div class="card-footer bg-transparent border-0">
                            <div class="product-link d-flex align-items-center justify-content-center">
                              <button class="btn-cart btn btn-pink mx-3" type="button"><i class="las la-shopping-cart mr-1"></i> Add to cart </button>
                            </div>
                          </div>
                        </div>
                      </div>
          </div>
        </div>
      </div>
    </div>
      </div>
      <div class="col-lg-3 col-md-12 sidebar mt-8 mt-lg-0">
        <div>
            <category-sidebar></category-sidebar>
          <price-list></price-list>
         <brand-list></brand-list>
         <color-list></color-list>
         
        <size-list></size-list>
        <side-banner></side-banner>
           

        </div>
      </div>
    </div>
  </div>
</section>
</div>	

</template>

<script>
	import TopHeader from '../includes/TopHeader.vue'
import CategorySidebar from '../includes/CategorySidebar.vue'
import PriceList from '../includes/PriceList.vue'
import BrandList from '../includes/BrandSidebar.vue'
import ColorList from '../includes/ColorSidebar.vue'
import SizeList from '../includes/SizeSidebar.vue'
import SideBanner from '../includes/SideBanner.vue'

export default {
 data () {
    return {
      header_title: 'Shop Category'
    }
  },
   components: {
    'top-header':TopHeader,
'category-sidebar':CategorySidebar,
'price-list':PriceList,
'brand-list':BrandList,
'color-list':ColorList,
'size-list':SizeList,
'side-banner':SideBanner,
  },
    mounted() {

/*------------------------------------
  HT Owl Carousel (js for product slider gallery in product details page )
--------------------------------------*/
$('.owl-carousel').each( function() {
  var $carousel = $(this);
  $carousel.owlCarousel({
      items : $carousel.data("items"),
      slideBy : $carousel.data("slideby"),
      center : $carousel.data("center"),
      loop : true,
      margin : $carousel.data("margin"),
      dots : $carousel.data("dots"),
      nav : $carousel.data("nav"),      
      autoplay : $carousel.data("autoplay"),
      autoplayTimeout : $carousel.data("autoplay-timeout"),
      navText : [ '<span class="la la-angle-left"><span>', '<span class="la la-angle-right"></span>' ],
      responsive: {
        0:{items: $carousel.data('xs-items') ? $carousel.data('xs-items') : 1},
        576:{items: $carousel.data('sm-items')},
        768:{items: $carousel.data('md-items')},
        1024:{items: $carousel.data('lg-items')},
        1200:{items: $carousel.data("items")}
      },
  });
});


/*------------------------------------
Cloude zoom
--------------------------------------*/
  var image = $('#product_img');
  //var zoomConfig = {};
  var zoomActive = false;
  
    zoomActive = !zoomActive;
  if(zoomActive) {
    if ($(image).length > 0){
      $(image).elevateZoom({
        cursor: "crosshair",
        easing : true, 
        gallery:'pr_item_gallery',
        zoomType: "inner",
        galleryActiveClass: "active"
      }); 
    }
  }
  else {
    $.removeData(image, 'elevateZoom');//remove zoom instance from image
    $('.zoomContainer:last-child').remove();// remove zoom container from DOM
  }
  
  $.magnificPopup.defaults.callbacks = {
    open: function() {
      $('body').addClass('zoom_image');
    },
    close: function() {
      // Wait until overflow:hidden has been removed from the html tag
      setTimeout(function() {
        $('body').removeClass('zoom_image');
    $('body').removeClass('zoom_gallery_image');
    $('.zoomContainer').slice(1).remove();
        }, 100);
      }
    };
  
  // Set up gallery on click
  var galleryZoom = $('#pr_item_gallery');
  galleryZoom.magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery:{
      enabled: true
    },
    callbacks: {
      elementParse: function(item) {
        item.src = item.el.attr('data-zoom-image');
      }
    }
  });
  
  // Zoom image when click on icon
  $('.product_img_zoom').on('click', function(){
    var atual = $('#pr_item_gallery a').attr('data-zoom-image');
    $('body').addClass('zoom_gallery_image');
    $('#pr_item_gallery .item').each(function(){
      if( atual == $(this).find('.product_gallery_item').attr('data-zoom-image') ) {
        return galleryZoom.magnificPopup('open', $(this).index());
      }
    });
  });
  
  $('.plus').on('click', function() {
    if ($(this).prev().val()) {
      $(this).prev().val(+$(this).prev().val() + 1);
    }
  });
  $('.minus').on('click', function() {
    if ($(this).next().val() > 1) {
      if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
    }
  });

/*------------------------------------------
  HT Text Color, Background Color And Image (color change js)
---------------------------------------------*/
    $('[data-bg-color]').each(function(index, el) {
     $(el).css('background-color', $(el).data('bg-color'));  
    });
    $('[data-text-color]').each(function(index, el) {
     $(el).css('color', $(el).data('text-color'));  
    });
    $('[data-bg-img]').each(function() {
     $(this).css('background-image', 'url(' + $(this).data("bg-img") + ')');
    });

/*------------------------------------
  HT btnproduct (Quantity Up Down Js)
--------------------------------------*/
  $('.btn-product-up').on('click', function (e) {
    e.preventDefault();
    var numProduct = Number($(this).next().val());
    if (numProduct > 1) $(this).next().val(numProduct - 1);
  });
  $('.btn-product-down').on('click', function (e) {
    e.preventDefault();
    var numProduct = Number($(this).prev().val());
    $(this).prev().val(numProduct + 1);
  }); 


  }
}

</script>

<style>

 </style>