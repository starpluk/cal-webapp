function exAusUPS(kG){
    kg = kG;
    
    if(kg>0 && kg <= 0.5) //875
          {
              price = kg*875;
          }
          else if (kg>0.5 && kg <= 1) //1,750
          {
              price = kg*1,750;
          }
          else if (kg>1 && kg <=1.5 ) //1,750
          {
              price = (float) (kg*1,750);
          }
          else if (kg>1.5 && kg <=2 ) //1,427
          {
              price = kg*1,427;
          }
          else if (kg>2 && kg <=2.5 ) //1,200
          {
              price = kg*1,200;
          }
          else if (kg>2.5 && kg <=3 ) //1,120
          {
              price = kg*1,120;
          }
          else if (kg>3 && kg <=3.5 ) //997
          {
              price = kg*997;
          }
          else if (kg>3.5 && kg <=4 ) //946
          {
              price = kg*946;
          }
          else if (kg>4 && kg <=4.5 ) //878
          {
              price = kg*878;
          }
          else if (kg>4.5 && kg <=5 ) //851
          {
              price = kg*851;
          }
          else if (kg>5 && kg <=5.5 ) //804
          {
              price = kg*804;
          }
          else if (kg>5.5 && kg <=6 ) //927
          {
              price = kg*927;
          }
          else if (kg>6 && kg <=6.5 ) //877
          {
              price = kg*877;
          }
          else if (kg>6.5 && kg <=7 ) //854
          {
              price = kg*854;
          }
          else if (kg>7 && kg <=7.5 ) //817
          {
              price = kg*817;
          }
          else if (kg>7.5 && kg <=8 ) //801
          {
              price = kg*801;
          }
          else if (kg>8 && kg <=8.5 ) //771
          {
              price = kg*771;
          }
          else if (kg>8.5 && kg <=9 ) //761
          {
              price = kg*761;
          }
          else if (kg>9 && kg <=9.5 ) //737
          {
              price = kg*737;
          }
          else if (kg>9.5 && kg <=10 ) //728
          {
              price = kg*728;
          }
          else if (kg>10 && kg <=10.5 ) //709
          {
              price = kg*709;
          }
          else if (kg>10.5 && kg <=11 ) //699
          {
              price = kg*699;
          }
          else if (kg>11 && kg <=11.5 ) //678
          {
              price = kg*678;
          }
          else if (kg>11.5 && kg <=12 ) //670
          {
              price = kg*670;
          }
          else if (kg>12 && kg <=12.5 ) //652
          {
              price = kg*652;
          }
          else if (kg>12.5 && kg <=13 ) //646
          {
              price = kg*646;
          }
          else if (kg>13 && kg <=13.5 ) //625
          {
              price = kg*625;
          }
          else if (kg>13.5 && kg <=14 ) //616
          {
              price = kg*616;
          }
          else if (kg>14 && kg <=14.5 ) //597
          {
              price = kg*597;
          }
          else if (kg>14.5 && kg <=15 ) //589
          {
              price = kg*589;
          }
          else if (kg>15 && kg <=15.5 ) //573
          {
              price = kg*573;
          }
          else if (kg>15.5 && kg <=16 ) //565
          {
              price = kg*565;
          }
          else if (kg>16 && kg <=16.5 ) //549
          {
              price = kg*549;
          }
          else if (kg>16.5 && kg <=17 ) //542
          {
              price = kg*542;
          }
          else if (kg>17 && kg <=17.5 ) //529
          {
              price = kg*529;
          }
          else if (kg>17.5 && kg <=18 ) //523
          {
              price = kg*523;
          }
          else if (kg>18 && kg <=18.5 ) //510
          {
              price = kg*510;
          }
          else if (kg>18.5 && kg <=19 ) //505
          {
              price = kg*505;
          }
          else if (kg>19 && kg <=19.5 ) //493
          {
              price = kg*493;
          }
          else if (kg>19.5 && kg <=20 ) //489
          {
              price = kg*489;
          }
          else if (kg>20 && kg <=21 ) //477
          {
              price = kg*360;
          }
          else if (kg>21 && kg <=45 ) //477
          {
              price = kg*477;
          }
          else if (kg>45 && kg <=71 ) //476
          {
              price = kg*476;
          }
          else if (kg>71 && kg <=100 ) //477
          {
              price = kg*477;
          }
          else if (kg>100) //477
          {
              price = kg*477;
          }
          else {
              price = kg*0;
          }
      return price;
  }