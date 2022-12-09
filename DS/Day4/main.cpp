#include <iostream>

#include "Tree.h"
using namespace std;

int main()
{
    Tree<int> tree;

    tree.Add(50);
    tree.Add(40);
    tree.Add(30);
    tree.Add(60);
    tree.Add(70);
    tree.Add(65);

    tree.Traverse();
    cout<<endl;
    cout<<tree.GetMaxDepth();

    return 0;
}
