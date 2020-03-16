<!doctype html>
<html lang="en">

<head>
  <!-- including html in head.php file -->
  <?php include("../control-shift/components/head.php"); ?>
  <title> Control (╯°▽°)╯ ┻━┻ Shift </title>
  <script src="/libraries/p5.js" type="text/javascript"></script>
  <script src="/libraries/p5.dom.js" type="text/javascript"></script>
  <script src="/libraries/p5.sound.js" type="text/javascript"></script>
  <script src="/sketch.js" type="text/javascript"></script>
</head>

<body>
  <div class="container">
    <!-- all content goes in the container -->

    <!-- creating navigation bar by pulling in html from the navBar.php file -->
    <?php include("../control-shift/components/navBar.php"); ?>
      
    <!-- all content goes in the container -->
    <div class="jumbotron d-flex align-items-center">
      <div class="container text-center">
        <h1><span>Control Shiftttt</span></h1>
        <h2><span>Weekender 5-7 June 2020
            <br>
            Exhibition 5-19 June 2020</span></h2>
      </div> <!-- end of text container -->
    </div> <!-- end of jumbotron -->

  </div> <!-- end of main container -->

  <div class="container home-page-content">
    <!-- row -->

    <hr>
    <p class="text-center"><em>Control Shift</em> is an exciting new arts programme coming to Bristol (UK) in June 2020 exploring creative and critical approaches to technology, rooted in embodiment and materiality.</p>
    <p class="text-center">
      Call out open for artworks, workshops and provocations. <br>Deadline 15th March.<br>
      <a href="call/call.php">More Info and How To Apply</a>
    </p>
    <!-- <p><a class="btn btn-blue" href="call/index.html">More information <span class="how-to-apply">/ how to apply</span></a></p> -->

  <hr>
    <div class="row">
      <div class="col-sm ">
        <p>
          We live in a world where machines increasingly collect information about us, reducing our bodies and the things around us to streams of data. In turn the digital realm can feel abstract, and out of our control. The stuff of computers and digital infrastructure is often hidden out of sight and huge power imbalances exist around who is making technology and who benefits from it. Yet the impact of our interactions with machines and technologies are very much rooted in the body, materials, and emotions.
        </p>
      </div>
      <div class="col-sm">
        <p>
          <em>Control Shift</em> asks how we can reframe and rethink our relationships with technology.
          How could we conceive of new possibilities beyond neoliberal versions of computing? What might happen if there was more space for poetic or tactile engagements with the digital? Can we reconsider our connections, responsibilities and embodied entanglements with technology?
        </p>
      </div>
    </div>
    <!-- row -->

    <!-- row -->
    <div class="row">
      <div class="col-sm">
        <br>
        <p>
          <strong>Launching on 5th June, <em>Control Shift</em> will incorporate a weekend of events (including performances, workshops, and talks) and an exhibition sited across different locations in Bristol that will run until 19th June.</strong>
        </p>
        <br><br>
      </div>
    </div>
    <!-- row -->
  </div>

  <!-- creating footer from html from the footer.php file -->
  <?php include("../control-shift/components/footer.php"); ?>

  <!-- JavaScript -->
  <!-- jQuery first, then Popper.js, then Bootstrap JS -->
  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body></html>
