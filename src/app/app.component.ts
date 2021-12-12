import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserIdleService } from 'angular-user-idle';
import { Title, Meta } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import * as chartData from '../app/chartjs';
import { ChartDataSets, ChartOptions, ChartType} from 'chart.js';
function _window() : any {
  // return the global native browser window object
  return window;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public today: number = Date.now();

  public active = 1

  chart:any= [];
    get nativeWindow() : any {
    return _window();
 }
  constructor(
    public toastr: ToastrService,

    private router: Router,
  
  ){

  }
 
ngOnInit(){
 
 
   

}


  //Line Chart
  public lineChartOptions = chartData.lineChartOptions
  public lineChartLabels = chartData.lineChartLabels
  public lineChartType = chartData.lineChartType
  public lineChartLegend = chartData.lineChartLegend
  public lineChartData = chartData.lineChartData
  public lineChartColors = chartData.lineChartColors


 
  
  //Doughnut and Pie Chart Data
  public PieChartLabels = chartData.PieChartLabels;
  public PieChartData = chartData.PieChartData;
  public PieChartOptions = chartData.PieChartOptions;
  public PieChartType = chartData.PieChartType;
  public DoughnutChartType = chartData.DoughnutChartType;
  
 
//Timer
options = {
  "key": "rzp_test_Rn92yHQdNeITE8", // Enter the Key ID generated from the Dashboard
  "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
  "currency": "INR",
  "name": "Osiz Technology",
  "description": "Test Transaction",
  "image":
    'https://livestatic.novopay.in/resources/img/nodeapp/img/Logo_NP.jpg', 
    "order_id": "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
  "handler": function (response){
      alert(response.razorpay_payment_id);
      // alert(response.razorpay_order_id);
      // alert(response.razorpay_signature)
      this.razorpayResponse = `Razorpay Response`;

      this.toastr.success(response.razorpay_order_id, '', {
        positionClass: 'toast-bottom-right', closeButton: true, timeOut: 1000
      });
  },
  "prefill": {
      "name": "test",
      "email": "test@example.com",
      "contact": "9993499999"
  },
  "notes": {
      "address": "osiz Technology"
  },
  "theme": {
      "color": "#3399cc"
  }
};
pay(){
  var rzp1 = new this.nativeWindow.Razorpay(this.options);
  rzp1.on('payment.failed', function (response){
    alert(response.error.code);
    alert(response.error.description);
    alert(response.error.source);
    alert(response.error.step);
    alert(response.error.reason);
    alert(response.error.metadata.order_id);
    // alert(response.error.metadata.payment_id);
    this.toastr.success(response.error.metadata.payment_id, '', {
      positionClass: 'toast-bottom-right', closeButton: true, timeOut: 1000
    });
});
 rzp1.open();
}
}
