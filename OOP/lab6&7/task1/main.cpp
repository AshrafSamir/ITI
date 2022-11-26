using namespace std;

#include <iostream>
#include "graphics.h"

class Point{

    int x,y;

public:
    Point(){
        x = y = 0;
    }
    Point(int m, int n){
        x = m;
        y = n;
    }
    Point(int v){
        x = y = v;
    }


    void setX(int m){
        x =m;
    }
    void setY(int n){
        y =n;
    }

    int getX(){
        return x;
    }
    int getY(){
        return y;
    }

};

class Circle{

    Point center;
    int rad;

public:
    Circle(){
        rad=0;
    }
    Circle(int x, int y, int r): center(x,y){
        rad=r;
    }
    Circle(Point p, int r):center(p){
        rad = r;
    }
    void setRad(int r){
        rad = r;
    }
    void setCenter(int x1, int y1){
        center.setX(x1);
        center.setY(y1);
    }

    void draw(){

        circle(center.getX(), center.getY(), rad);
    }
};

class Rect{

    Point UL;
    Point LR;

public:
    Rect(){

    }
    Rect(int x, int y, int x2, int y2):UL(x,y), LR(x2,y2){

    }

    void draw(){
        // draw fun to draw rect
        rectangle(UL.getX(), UL.getY(), LR.getX(), LR.getY());
    }

    void setLR(int x, int y){

        LR.setX(x);
        LR.setY(y);
    }
    void setUL(int x, int y){

        UL.setX(x);
        UL.setY(y);
    }

    Point& getUL(){
        return UL;
    }

    void getUL(int &x, int &y){
        x=UL.getX();
        y=UL.getY();
    }

    void getLR(int &x, int &y){
        x=LR.getX();
        y=LR.getY();
    }
};

class Line{

    Point st, ed;

public:
    Line(){
    }
    Line(int xst, int yst, int xend, int yend):st(xst,yst),ed(xend,yend){

    }

    void draw(){
        line(st.getX(), st.getY(), ed.getX(), ed.getY());
    }

    void setSt(int x, int y){

        st.setX(x);
        st.setY(y);
    }
    void setEd(int x, int y){

        ed.setX(x);
        ed.setY(y);
    }

    void getSt(int &x, int &y){
        x=st.getX();
        y=st.getY();
    }

    void getEd(int &x, int &y){
        x=ed.getX();
        y=ed.getY();
    }
};

class Picture{

    int cnum;
    int rnum;
    int lnum;

    Circle *pCircle;
    Rect *pRect;
    Line *pLine;

public:
    Picture(){
        cnum=0;
        rnum=0;
        lnum = 0;
        pCircle = nullptr;
        pRect = nullptr;
        pLine = nullptr;
    }
    Picture(Circle *pc, Rect *pr, Line *pl, int cn, int rn, int ln){
        cnum = cn;
        rnum = rn;
        lnum = ln;
        pCircle = pc;
        pRect = pr;
        pLine = pl;
    }
    void setRect(Rect *pr, int rn){
        rnum = rn;
        pRect = pr;
    }

    void setCircle(Circle *pc, int cn){
        cnum = cn;
        pCircle = pc;
    }

    void setLine(Line *pl, int ln){
        lnum= ln;
        pLine= pl;
    }

    void Paint();
};

void Picture::Paint(){

    int i;

    for(i=0; i<cnum;i++){
        pCircle[i].draw();
    }
    for(i=0; i<rnum;i++){
        pRect[i].draw();
    }
    for(i=0; i<lnum;i++){
        pLine[i].draw();
    }

}


int main(){


    initgraph();

    Picture myPic;

    Circle cArr[3]= {Circle(500,300,30),
    Circle(200, 300,50),Circle(420,300,60)};

    Rect rArr[2]= { Rect(100,40,120, 100),
    Rect(420, 200,320, 300)};

    Line lArr[2]= { Line(420,50,300, 200),
    Line(40, 400,50, 300)};

    myPic.setCircle(cArr, 3);
    myPic.setRect(rArr, 2);
    myPic.setLine(lArr, 2);

    myPic.Paint();



    return 0;
}



