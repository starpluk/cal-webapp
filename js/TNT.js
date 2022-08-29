function exUsaCanadaTNT(kG){
    kg = kG;
    
    if(kg>0 && kg <= 0.5) //850
          {
              price = kg*850;
          }
          else if (kg>0.5 && kg <= 1) //1,700
          {
              price = kg*1,700;
          }
          else if (kg>1 && kg <=1.5 ) //1,700
          {
              price = (float) (kg*1,700);
          }
          else if (kg>1.5 && kg <=2 ) //1,280
          {
              price = kg*1,280;
          }
          else if (kg>2 && kg <=2.5 ) //1,040
          {
              price = kg*1,040;
          }
          else if (kg>2.5 && kg <=3 ) //924
          {
              price = kg*924;
          }
          else if (kg>3 && kg <=3.5 ) //820
          {
              price = kg*820;
          }
          else if (kg>3.5 && kg <=4 ) //766
          {
              price = kg*766;
          }
          else if (kg>4 && kg <=4.5 ) //708
          {
              price = kg*708;
          }
          else if (kg>4.5 && kg <=5 ) //678
          {
              price = kg*678;
          }
          else if (kg>5 && kg <=5.5 ) //642
          {
              price = kg*642;
          }
          else if (kg>5.5 && kg <=6 ) //622
          {
              price = kg*622;
          }
          else if (kg>6 && kg <=6.5 ) //597
          {
              price = kg*597;
          }
          else if (kg>6.5 && kg <=7 ) //585
          {
              price = kg*585;
          }
          else if (kg>7 && kg <=7.5 ) //564
          {
              price = kg*564;
          }
          else if (kg>7.5 && kg <=8 ) //556
          {
              price = kg*556;
          }
          else if (kg>8 && kg <=8.5 ) //540
          {
              price = kg*540;
          }
          else if (kg>8.5 && kg <=9 ) //534
          {
              price = kg*534;
          }
          else if (kg>9 && kg <=9.5 ) //521
          {
              price = kg*521;
          }
          else if (kg>9.5 && kg <=10 ) //517
          {
              price = kg*517;
          }
          else if (kg>10 && kg <=10.5 ) //507
          {
              price = kg*507;
          }
          else if (kg>10.5 && kg <=11 ) //499
          {
              price = kg*499;
          }
          else if (kg>11 && kg <=11.5 ) //484
          {
              price = kg*484;
          }
          else if (kg>11.5 && kg <=12 ) //476
          {
              price = kg*476;
          }
          else if (kg>12 && kg <=12.5 ) //463
          {
              price = kg*463;
          }
          else if (kg>12.5 && kg <=13 ) //457
          {
              price = kg*457;
          }
          else if (kg>13 && kg <=13.5 ) //445
          {
              price = kg*445;
          }
          else if (kg>13.5 && kg <=14 ) //440
          {
              price = kg*440;
          }
          else if (kg>14 && kg <=14.5 ) //431
          {
              price = kg*431;
          }
          else if (kg>14.5 && kg <=15 ) //426
          {
              price = kg*426;
          }
          else if (kg>15 && kg <=15.5 ) //417
          {
              price = kg*417;
          }
          else if (kg>15.5 && kg <=16 ) //414
          {
              price = kg*414;
          }
          else if (kg>16 && kg <=16.5 ) //406
          {
              price = kg*406;
          }
          else if (kg>16.5 && kg <=17 ) //402
          {
              price = kg*402;
          }
          else if (kg>17 && kg <=17.5 ) //396
          {
              price = kg*396;
          }
          else if (kg>17.5 && kg <=18 ) //393
          {
              price = kg*393;
          }
          else if (kg>18 && kg <=18.5 ) //387
          {
              price = kg*387;
          }
          else if (kg>18.5 && kg <=19 ) //384
          {
              price = kg*384;
          }
          else if (kg>19 && kg <=19.5 ) //379
          {
              price = kg*379;
          }
          else if (kg>19.5 && kg <=20 ) //377
          {
              price = kg*377;
          }
          else if (kg>20 && kg <=21 ) //372
          {
              price = kg*372;
          }
          else if (kg>21 && kg <=50 ) //338
          {
              price = kg*338;
          }
          else if (kg>50 && kg <=70 ) //334
          {
              price = kg*334;
          }
          else if (kg>70 && kg <=100 ) //310
          {
              price = kg*310;
          }
          else if (kg>100 && kg <=250 ) //308
          {
              price = kg*308;
          }
          else if (kg>250) //302
          {
              price = kg*302;
          }
          else {
              price = kg*0;
          }
      return price;
  }