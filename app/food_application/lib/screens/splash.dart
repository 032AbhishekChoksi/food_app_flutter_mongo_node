import 'package:flutter/material.dart';
import 'package:food_application/screens/dashboard.dart';

class Splash extends StatefulWidget {
  const Splash({super.key});

  @override
  State<Splash> createState() => _SplashState();
}

class _SplashState extends State<Splash> {
  @override
  void initState() {
    super.initState();
    _navigateToMainScreen();
  }

  void _navigateToMainScreen() {
    // Simulate a delay for demonstration purposes
    Future.delayed(const Duration(seconds: 4), () {
      // Navigate to the main screen or any other screen in your app
      Navigator.pushReplacement(
        context,
        MaterialPageRoute(builder: (context) => const Dashboard()),
      );
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Image.asset(
              "assets/images/logo.png",
              height: 200,
              width: 200,
            ),
            const SizedBox(
              height: 25,
            ),
            const Text(
              "Food App",
              style: TextStyle(
                  fontSize: 30, fontWeight: FontWeight.w600, color: Colors.red),
            ),
            const SizedBox(
              height: 20,
            ),
            const Text(
              "Developed By Abhishek Choksi 💻",
              style: TextStyle(
                  fontSize: 15,
                  fontWeight: FontWeight.w800,
                  color: Colors.black54),
            )
          ],
        ),
      ),
    );
  }
}
