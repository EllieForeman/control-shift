<?php
// making a variable filename with the script file name, so the class 'active' can be added to th navbar if we currently on that page. 
$filename = basename($_SERVER['PHP_SELF']);
?>

<!-- html for navigation bar -->
<nav class="navbar navbar-expand-lg navbar-light" id="menu-mobile">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Open the menu">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a <?php echo ($filename == 'index.php')? 'class="nav-item nav-link active"':'class="nav-item nav-link"'; ?> href='/index.php'>home</a>
      <a <?php echo ($filename == 'about.php')? 'class="nav-item nav-link active"':'class="nav-item nav-link"'; ?> href='/about.php'>about us</a>
      <a <?php echo ($filename == 'call.php')? 'class="nav-item nav-link active"': 'class="nav-item nav-link"'; ?> href='/call/call.php'>open call</a>
      <a <?php echo ($filename == 'contact.php')? 'class="nav-item nav-link active"': 'class="nav-item nav-link"'; ?> href='/contact.php'>contact</a>
    </div>
  </div>
</nav>
<!-- /nav bar --> 