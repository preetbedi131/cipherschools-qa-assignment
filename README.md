QA Engineer Internship Assignment

Tools Used
Playwright – End-to-End Automation
JMeter – API Load Testing
k6 – Load Simulation

Project Structure

/e2e – Playwright automation script
/load/jmeter – JMeter test plan
/load/k6 – k6 load script
/config – environment configuration
/screenshots – bug evidence

How to Run

1 Install Node.js
2 npm install
3 npx playwright test

Run k6 load test

k6 run load/k6/load-test.js
