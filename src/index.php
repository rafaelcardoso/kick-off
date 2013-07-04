<?php
include('structure/header.html');
	include((isset($_GET['page']) ? 'pages/'.$_GET['page'].'.html' : 'pages/index.html'));
include('structure/footer.html');