#include <iostream>

class GeoShape{

protected:
    float dm1, dm2;

public:
    GeoShape(){
        dm1=dm2 =0;
    }
    GeoShape(float d){
        dm1=dm2 =d;
    }
    GeoShape(float d1, float d2){
        dm1= d1;
        dm2 =d2;
    }

    void setDm1(float d){
        dm1 = d;
    }
    void setDm2(float d){
        dm2 = d;
    }

    float getDm1(){
        return dm1;
    }
    float getDm2(){
        return dm2;
    }

    float calcArea(){
        return 0.0;
    }
};

class Circle: public GeoShape{
public:
    Circle(){
    }

    Circle(float r):GeoShape(r){
    }

    float calcArea(){
        return 3.14*dm1*dm2;
    }
};

class Rect : public GeoShape{

public:
    Rect(){
    }
    Rect(float w, float l): GeoShape(w,l){
    }
    float calcArea(){
        return dm1*dm2;
    }
};

class Square : public Rect{

public:
    Square(){
    }
    Square(float l): Rect(l, l){
    }
};

class Triangle : public GeoShape{

public:
    Triangle(){
    }
    Triangle(float b, float h): GeoShape(b, h){
    }
    float calcArea(){
        return 0.5*dm1*dm2;
    }
};

using namespace std;

int main(){

    Triangle t(20, 10);
    cout << t.calcArea() << endl;

    Circle c(7);
    cout << c.calcArea() << endl;

    Rect r(2,5);
    cout << r.calcArea() << endl;

    Square s(5);
    cout << s.calcArea() << endl;

    Square ss;
    ss.setDm1(7);
    ss.setDm2(8);

    Circle cc;
    cc.setDm1(8);
    cc.setDm2(9);

    return 0;
}
