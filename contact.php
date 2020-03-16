<!doctype html>
<html lang="en">

<head>
  <!-- including html in head.php file -->
  <?php include("../control-shift/components/head.php"); ?>
  <title>Control Shift - contact</title>
</head>

<body>
  <div class="container">
    <!-- all content goes in the container -->

    <!-- creating navigation bar by pulling in html from the navBar.php file -->
    <?php include("../control-shift/components/navBar.php"); ?>

    <!-- row  -->
    <div class="row">
      <div class="col-sm">
        <h1>Contact us / Subscribe</h1>

        <p>If you have any questions about Control Shift please contact us through the form below. </p>
        <p>Join our mailing list for the latest news and info by checking the subscribe box.</p>


        <div class="form-area d-flex justify-content-center">
          <form role="form" name="contactForm" id="contactForm">
          <!-- <form role="form" action="https://network.us4.list-manage.com/subscribe/post?u=e432b14e44ea9b04c5ab8633e&amp;id=91154fa16e" method="get" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate> -->

            <br style="clear:both">
            <div class="form-group">
              <input type="text" value="" name="FNAME" class="form-control mc" id="mce-FNAME" placeholder="First Name" required><input type="text" value="" name="LNAME" class="form-control mc" id="mce-LNAME" placeholder="Last Name" required>
              <!-- <input type="text" name="inputFirstName" class="form-control" id="inputFirstName" placeholder="First Name" required> -->
            </div>

            <div class="form-group">
              
              <!-- <input id="inputLastName" type="text" name="inputLastName" class="form-control" placeholder="Last Name" required> -->
            </div>

            <div class="form-group">
              <input type="email" value="" name="EMAIL" class="form-control required email mc" id="mce-EMAIL" placeholder="Email" required>
              <!-- <input id="inputEmail" type="text" name="inputEmail" class="form-control" placeholder="Email" required> -->
            </div>

            <div class="form-group">
              <textarea id="inputMsg" type="textarea" name="inputMsg" class="form-control" placeholder="Optional Message" maxlength="140" rows="7"></textarea>
            </div>

            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="SubscribeCheckBox">
              <label class="form-check-label" for="SubscribeCheckBox">Subscribe me to the Control Shift mailing list, I have read and agree to the <a href="privacy." target="_blank">Privacy Policy</a></label>
            </div>

            <div class="overlay is-hidden" id="overlay">
              <span class="" id="sendStatus">hello</span><span class="button-close" onclick="closeModal();"></span>
            </div>

            <div class="send-submit">
              <a href="#/"  id="sendMsg">Send</a>
            </div>
            
          </form>
        </div>
        <p></p>
      </div>

    </div>
  </div>

  <!-- creating footer from html from the footer.php file -->
  <?php include("../control-shift/components/footer.php"); ?>

  <!-- JavaScript -->
  <script src="js/contact-form.js"></script>
  <!-- jQuery first, then Popper.js, then Bootstrap JS -->
  <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>

</html>
