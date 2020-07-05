<?php
?>
<!DOCTYPE html>
<html>

<head>
    <!-- SEO and Metadata-->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Home - MUCCI</title>

    <!-- Core CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"/>
    <link rel="stylesheet" href="css/core.css">

    <!-- Core JS -->
    <script src="js/core.js"></script>

    <!-- Individual CSS and JS -->
    <link rel="stylesheet" href="css/shoppar.css">
</head>

<body>

<!-- for navigation bar once it is made-->
<?php include "nav.html"; ?>

<div class="row" id="ar-content">
    <div class="col-lg-1"></div>
    <div class="col-lg-7">
        <div class="display-cover">
            <video autoplay></video>
            <canvas class="d-none"></canvas>

            <div class="video-options">
                <select name="" id="" class="custom-select">
                    <option value="">Select camera</option>
                </select>
            </div>

            <div class="controls">
                <button class="btn btn-success play" title="Start"><i data-feather="play-circle"></i></button>
            </div>
        </div>
    </div>
    <div class="col-lg-3" id="ar-info">
        <div class="card bg-blue pt-4 h-100" id="ar-card">
            <img src="img/shoppar.png" class="card-img-top img-responsive" alt="Shoppar">
            <div class="card-body text-light" id="ar-main">
                <h5 class="card-title font-weight-bold">INSTRUCTIONS...</h5>
                <div class="progress mt-4">
                    <div id="ar-prog" class="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>
                </div>
                <p id="ar-instr" class="card-text mt-4">1. Click the Start button on the camera feed<br><br>2. Allow access to your camera to get started</p>
            </div>
        </div>

    </div>
    <div class="col-lg-1"></div>
</div>


<?php include "footer.html"; ?>

<!-- Framework JS -->
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
<script src="https://unpkg.com/feather-icons"></script>

<script src="js/shoppar.js"></script>

</body>

</html>
