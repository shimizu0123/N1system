<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">




<html>
	<head>
		<title>N1</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<!--[if lte IE 8]><script src="assets/js/ie/html5shiv.js"></script><![endif]-->
		<link rel="stylesheet" href="assets/css/main.css" />
		<link rel="stylesheet" href="assets/css/2.css" />
		<!--[if lte IE 8]><link rel="stylesheet" href="assets/css/ie8.css" /><![endif]-->
		<!--[if lte IE 9]><link rel="stylesheet" href="assets/css/ie9.css" /><![endif]-->
	</head>
	<body>

		<!-- Header -->
			<header id="header">
				<h1>N1</h1>
				<p>New Next Nippon Navigation<br />
				</p>
			</header>

		<!-- Signup Form -->
		<a class="btn btn-medium btn-blue btn-radius" href="#">RADAR CONTROL</a>
			<form id="signup-form" method="post" action="#">
				<input type="button" value="CLOSE" onClick="location.href='../index.html'">
				<input type="submit" value="ADMINISTRATOR" />


			</form>





			<form action="/connection/ConnectionOrDie" method="post" >
				DBに格納する？<br>
				はい<input type="radio" name="inYesOrNo" value="1">
				いいえ<input type="radio" name="inYesOrNo" value="0"><br><br>
				XML作成する？<br>
				はい<input type="radio" name="xYesOrNo" value="1">
				いいえ<input type="radio" name="xYesOrNo" value="0"><br><br>
				<input type="submit" value="ADMINISTRATOR" />

			</form>

			<%
			request.setCharacterEncoding("UTF-8");
			String inYesOrNo = request.getParameter("inYesOrNo");
			String xYesOrNo = request.getParameter("xYesOrNo");
			%>
			<%if("1".equals(inYesOrNo)){%>
				<p>格納している</p>
			<%}else if("0".equals(inYesOrNo)){%>
				<p>格納してない</p>
			<% }%>
			<%if("1".equals(xYesOrNo)){%>
				<p>xmlしている</p>
			<%}else if("0".equals(xYesOrNo)){%>
				<p>xmlしてない</p>
			<% } %>






		<!-- Scripts -->
			<!--[if lte IE 8]><script src="assets/js/ie/respond.min.js"></script><![endif]-->
			<script src="assets/js/main.js"></script>

	</body>
</html>