<?php include "./includes/Header.php"; ?>
<!-- Navigation -->
<?php include "./includes/Navigation.php"; ?>

<header id="contact_0" role="presentation" class="contact-header "></header>
<?php include "./includes/WWU_CTA_contact.php"; ?>

<section>
    <div class="container">
        <div class="row address_row" data-scrollreveal="enter bottom over 1.5s">
            <div class="col-lg-12 contact_addressInfo">
                <h3 class="contact_header1">Angry Apples Marketing Agency</h3>
            </div>    
            <div class="col-xs-12 contactContainer">
                <ul class="contact-list">
                    <li class="">
                        <i class="fa fa-map-marker fa-2x animated fadeInUp" ></i>
                        <p class="address_line1">55-59 Chrystie Street, Suite 208, New York, NY 10002 </p>
                        <!-- <p class="address_line2"> New York, NY 10002 </p> -->
                    
                    </li>
                    <li class="">
                        <i class="fa fa-mobile fa-3x animated faa-ring faa-slow fadeIn"></i>
                        <a class="phone" href="tel:2125551212">Phone: 212-555-1212</a>
                    </li>
                    <li  class="">
                        <i class="fa fa-envelope fa-2x animated fadeInUp"></i>
                        <a class="" href="mailto:hello@goangry.com">Email: hello@goangry.com</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>

<section id="contact" class="contact-1">
<div class="container">
    <div class="row ">
        <!-- <div class="col-lg-6" data-scrollreveal="enter left over 1.5s">
            <h2>Contact Us</h2>
            <p>Spectrum comes loaded with a working contact form! Just follow the instructions in the documentation to get your form working. All you need to do is change an email address, no code writing required!</p>
            <p>The contact form to the right is a demo form and will not send email to Start Bootstrap. If you have a question about the theme, please contact us through our WrapBootstrap profile.</p>
        </div> -->
        <div class="col-lg-12" data-scrollreveal="enter right over .5s">
            <br>
            <form name="sentMessage" id="contactForm" novalidate>
                <div class="row control-group">
                    <div class="col-lg-12 col-xs-12">
                        <div class="col-lg-12">
                            <h2 class="contact_form_header">your info</h2>
                        </div>
                        <div class="form-group col-xs-12 col-lg-6 floating-label-form-group controls">
                            <label for="name">Full Name</label>
                            <input type="text" class="form-control" placeholder="Full Name" id="name" required data-validation-required-message="Please enter your name.">
                            <p class="help-block text-danger"></p>
                        </div>
                        <div class="form-group col-xs-12 col-lg-6 floating-label-form-group controls">
                            <label for="email">Email Address</label>
                            <input type="email" class="form-control" placeholder="Email Address" id="email" required data-validation-required-message="Please enter your email address.">
                            <p class="help-block text-danger"></p>
                        </div>
                    </div>
                </div>
                <div class="row control-group">
                    <div class="col-lg-12 col-xs-12">
                        <div class="form-group col-xs-12 col-lg-6 floating-label-form-group controls">
                            <label for="company_name">Company Name</label>
                            <input type="text" class="form-control" placeholder="Company Name" id="company_name" required data-validation-required-message="Please enter your name.">
                            <p class="help-block text-danger"></p>
                        </div>
                        <div class="form-group col-xs-12 col-lg-6 floating-label-form-group controls styled-select">
                            <label for="interest">Email Address</label>
                            <select class="form-control" placeholder="Interested in" id="interest">
                                <option value="interested_in">Interested in</option>
                                <option value="strategu">Strategy</option>
                                <option value="branding">Branding</option>
                                <option value="social_media">Social Media</option>
                                <option value="digital">Digital</option>
                                <option value="creative">Creative</option>
                                <option value="experimental">Experimental</option>

                            </select>
                            <!-- <input type="email" class="form-control" placeholder="Interested in" id="email" required data-validation-required-message="Please enter your email address."> -->
                            <p class="help-block text-danger"></p>
                        </div>
                    </div>
                </div>
                <!-- <div class="row control-group">
                    <div class="form-group col-xs-12 col-lg-5 floating-label-form-group controls">
                        <label>Email Address</label>
                        <input type="email" class="form-control" placeholder="Email Address" id="email" required data-validation-required-message="Please enter your email address.">
                        <p class="help-block text-danger"></p>
                    </div>
                </div> -->
                <div class="row control-group">
                    <div class="col-lg-12 col-xs-12">

                        <div class="col-lg-12 col-xs-12">
                            <h2 class="contact_form_header">write your comments here</h2>
                        </div>

                        <div class="form-group col-xs-12 col-lg-12 floating-label-form-group controls">
                            <label for="message">Message</label>
                            <textarea rows="5" class="form-control" placeholder="" id="message" required data-validation-required-message="Please enter a message."></textarea>
                            <p class="help-block text-danger"></p>
                        </div>
                    </div>
                </div>
                <br>
                <div id="success"></div>
                <div class="row">
                    <div class="form-group col-xs-12">
                        <button type="submit" class="btn btn-lg btn-primary btn-square btn-raised animated-button victoria-three contact_submit">Send</button>
                    </div>
                    <!-- <a class="btn animated-button victoria-three contact_submit" href="">Send</a> -->
                </div>
            </form>
        </div>
    </div>
</div>
</section> 



<!-- Footer -->
<?php include "./includes/Footer.php"; ?>
