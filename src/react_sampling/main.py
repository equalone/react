import os
import random
path = os.path.abspath(os.path.dirname(__file__))
print(path)


def input_order():
    newcommder = input('请输入新命令....:')
    with open(path+'/text.txt', 'a+', encoding='utf-8') as f:
        f.write('\n'+newcommder)


def judge():
    if os.path.exists('/rest_commder.txt') == False:
        file = open(path+'/rest_commder.txt', 'w')
        file.close()

    with open(path+'/rest_commder.txt', 'r') as f:
        a = f.readlines()
    if len(a):
        random_order(path+'/rest_commder.txt')
    else:
        random_order(path+'/text.txt')


def random_order(files):  # /rest_commder.txt,/text.txt
    with open(files, 'r+') as f:
        a = f.readlines()
        if len(a) > 5:
            b = random.sample(a, 5)
        else:
            b = a
        print(*b, sep='\n')
    print(len(a))
    rest = list(set(a)-set(b))
    rest.sort()
    print(len(rest))
    with open(path+'/rest_commder.txt', 'w+') as f:
        f.writelines(rest)
    with open(path+'/App.js', 'w+') as f:
        f.writelines("{/*\n")
        f.writelines(b)
        f.writelines("*/}\n")


def collection_order():
    with open(path+'/App.js', 'r')as f:
        content = f.readlines()
    with open(path+'/collection1.js', 'a+')as f:
        newcontent=[]
        for i in content:
            newstr='//'+i
            newcontent.append(newstr)
        f.writelines("\n")
        f.writelines("\n")
        # f.writelines("/*\n")
        f.writelines(newcontent)
        # f.writelines("*/\n")


def main():
    print('*'*40)
    print("输入1,导入命令")
    print("输入2,命令抽样")
    print("输入3,收藏样本")
    print("输入4,退出")
    print('*'*40)
    n = int(input("请输入1-4…"))
    if n == 1:
        input_order()
        main()
    elif n == 2:
        judge()
        main()
    elif n == 3:
        collection_order()
        main()
    elif n == 4:
        return
    else:
        print("无效输入，重新选择…")
        main()


if __name__ == '__main__':
    main()
