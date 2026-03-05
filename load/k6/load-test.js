
import http from 'k6/http';

export let options = {
 stages: [
   { duration: '10s', target: 20 },
   { duration: '30s', target: 20 },
   { duration: '10s', target: 0 }
 ],
 thresholds: {
   http_req_duration: ['p(95)<2000'],
   http_req_failed: ['rate<0.01']
 }
};

export default function () {

http.get(
'https://with-bugs.practicesoftwaretesting.com/api/products/search?q=hammer'
);

}
