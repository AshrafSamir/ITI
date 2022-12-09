#ifndef TREE_H
#define TREE_H

#include <iostream>
#include "Node.h"

using namespace std;

template<class T>
class Tree
{
    Node<T> *root;

    public:
        Tree()
        {
            root = NULL;
        }

        void Add(T data)
        {
            Node<T> *node = new Node<T>(data);

            if(root == NULL)
            {
                root = node;
            }
            else
            {
                Node<T> *current = root;
                Node<T> *parent;

                while(current != NULL)
                {
                    parent = current;

                    if(data > current->Data)
                        current = current->Right;
                    else
                        current = current->Left;
                }

                if(data > parent->Data)
                    parent->Right = node;
                else
                    parent->Left = node;
            }
        }

        void Remove(T data)
        {
            Node<T> *node = GetNodeByData(data);

            if(node == NULL)
                return;

            if(node == root)
            {
                if(root->Left == NULL && root->Right == NULL)
                {
                    root = NULL;
                }
                else if(root->Right == NULL)
                {
                    root = root->Left;
                }
                else if(root->Left == NULL)
                {
                    root = root->Right;
                }
                else
                {
                    Node<T> *newRoot = root->Left;
                    Node<T> *maxRight = GetMaxRight(newRoot);

                    maxRight->Right = root->Right;
                    root = newRoot;
                }
            }
            else
            {
                Node<T> *parent = GetParent(node);
                Node<T> *newChild;

                if(node->Left == NULL && node->Right == NULL)
                {
                    newChild = NULL;
                }
                else if(node->Right == NULL)
                {
                    newChild = node->Left;
                }
                else if(node->Left == NULL)
                {
                    newChild = node->Right;
                }
                else
                {
                    Node<T> *newParent = node->Left;
                    Node<T> *maxRight = GetMaxRight(newParent);

                    maxRight->Right = node->Right;

                    newChild = newParent;
                }

                if(parent->Left == node)
                    parent->Left = newChild;
                else
                    parent->Right = newChild;
            }

            delete node;
        }

        void Traverse()
        {
            Display(root);
        }

        int GetMaxDepth()
        {
            int counterLeft = 0, counterRight = 0;
            rightSideTraverse(root,counterRight);
            leftSideTraverse(root,counterLeft);

            if(counterRight>counterLeft)
            return counterRight;
            else return counterLeft;
        }

    protected:

    private:

        Node<T>* GetNodeByData(T data)
        {
            Node<T> *current = root;

            while(current != NULL)
            {
                if(data == current->Data)
                    return current;

                if(data > current->Data)
                    current = current->Right;
                else
                    current = current->Left;
            }

            return NULL;
        }

        Node<T>* GetParent(Node<T> *node)
        {
            Node<T> *parent = root;

            while(parent != NULL)
            {
                if(parent->Left == node || parent->Right == node)
                    return parent;

                if(node->Data > parent->Data)
                    parent = parent->Right;
                else
                    parent = parent->Left;
            }

            return NULL;
        }

        Node<T>* GetMaxRight(Node<T> *node)
        {
            while(node->Right != NULL)
            {
                node = node->Right;
            }

            return node;
        }

        void Display(Node<T> *node)
        {
            if(node == NULL)
                return;

            Display(node->Left);
            cout << node->Data << "   ";
            Display(node->Right);
        }

        void leftSideTraverse(Node<T> *node, int &counter = 0)
        {
            if((node == NULL))
                return;

            counter++;
            leftSideTraverse(node->Left,counter);

            if((node == root))
                return;
            counter--;
            leftSideTraverse(node->Right,counter);
            counter++;

        }

        void rightSideTraverse(Node<T> *node, int &counter = 0)
        {
            if((node == NULL))
                return ;

            counter++;
            rightSideTraverse(node->Right,counter);

            if((node == root))
                return ;
            counter--;
            rightSideTraverse(node->Left,counter);
            counter++;

        }
};

#endif // TREE_H
