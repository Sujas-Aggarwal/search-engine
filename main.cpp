#include <iostream>
#include <string>
#include <vector>
#include <fstream>
using namespace std;
int main(int argc, char *argv[])
{
    ifstream sourceText(argv[1]);
    if (!sourceText.is_open())
    {
        cerr << "Error opening the file!" << endl;
        return 1;
    }
    ifstream searchText(argv[2]);
    if (!searchText.is_open())
    {
        cerr << "Error opening the file!" << endl;
        return 1;
    }
    string text;
    string pattern;
    string temp;
    while (getline(searchText,temp)){
        pattern+=temp;
    }
    int patternSize = pattern.size();
    vector<int> index;
    while (getline(sourceText, text))
    {
        int textSize = text.size();
        for (int i = 0; i < textSize - patternSize; i++)
        {
            bool match = true;
            for (int j = 0; j < patternSize; j++)
            {
                if (text[i + j] != pattern[j])
                {
                    match = false;
                    break;
                }
            }
            if (match)
            {
                index.push_back(i);
            }
        }
    }
    for (int i : index)
    {
        cout << i << " ";
    }

    return 0;
}