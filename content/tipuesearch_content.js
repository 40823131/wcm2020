var tipuesearch = {"pages": [{'title': '每週進度', 'text': '', 'tags': '', 'url': '每週進度.html'}, {'title': 'W1-W5', 'text': '隨身系統之建立 \n (1)下載安裝Python3.8.2至電腦，從電腦C槽中複製Python38資料夾至隨身系統之data目錄下， 解除電腦系統中之 Python。 \n (2)下載 Scite.exe編輯器並將資料夾移至隨身系統下之data目錄下，將SciTEGlobal.properties檔案中的code.page = 0修改為code.page = 65001，如此一來就可以更方便的打開內涵中文字的程式了，最後利用SciTE建立stop.bat與start.bat如下: \n start.bat \n @echo off\nset Disk=y\npath=%PATH%;\n\ntaskkill /IM python.exe /F\ntaskkill /IM pythonw.exe /F\n\ntaskkill /IM scite.exe /F\n\nREM 終止虛擬硬碟與目錄的對應\nsubst %Disk%: /D\nREM 關閉 cmd 指令視窗\ntaskkill /IM cmd.exe /F\n\nEXIT \n stop.bat \n @echo off\nset Disk=y\nsubst %Disk%: "data"\n\n%Disk%:\n\nset HomePath=%Disk%:\\home\nset HomeDrive=%Disk%:\\home\nset Home=%Disk%:\\home\nset USERPROFILE=%Disk%:\\home\n\nREM 將系統 Python 程式的 io 設為 utf-8\nset PYTHONIOENCODING="utf-8"\n\nset PYTHONPATH=%Disk%:\\Python38\\DLLs;%Disk%:\\Python38\\Lib;%Disk%:\\Python38\\Lib\\site-packages;\nset PYTHONHOME=%Disk%:\\Python38\n\nset path_python=%Disk%:\\Python38;%Disk%:\\Python38\\Scripts;\n\npath=%Disk%:;%path_python%;\n\nstart /MIN cmd.exe\nstart /MIN cmd.exe\nstart /MIN cmd.exe\nstart /MIN cmd.exe\n\nstart /MIN %Disk%:\\wScite\\SciTE.exe\nstart /MIN %Disk%:\\wScite\\SciTE.exe\n\nExit \n (3) 利用get-pip.py在先前完成之隨身系統中安裝pip，利用pip指令python -m pip install flask lxml bs4 flask-cors Markdown pelican leo 安裝 flask lxml\xa0beautifulsoup4 flask-cors Markdown pelican 及 leo \n (4)下載msys2先安裝在Windows系統，從電腦C槽中複製msys64資料夾至隨身系統之data目錄下，並解除電腦系統中之msys2。 \n (5)設置y：\\ msys64 \\ etc \\ pacman.conf與wgetrc等兩個檔案： pacman.conf檔案部分： \n # next two lines uncommented for wcm2020\nXferCommand = /usr/bin/curl -L -C - -f -o %o %u\nXferCommand = /usr/bin/wget --passive-ftp -c -O %o %u\n#CleanMethod = KeepInstalled\nArchitecture = auto \n wgetrc檔案部分： \n # set for wcm2020\nhttps_proxy = http://[2001:288:6004:17::53]:3128/\nhttp_proxy = http://[2001:288:6004:17::53]:3128/\nftp_proxy = http://[2001:288:6004:17::53]:3128/ \n 修改完成後，重新啟動mingw64.exe，使用指令透過IPv6的proxy server進行 程序包更新： \n $ pacman -Syu \n 再安裝base-devel與gcc \n $ pacman -S base-devel\n$ pacman -S gcc \n 安裝完後須修改start.bat之內容如下: \n REM 設定 msys2 64 位元的執行路徑\nset path_msys2=%Disk%:\\msys64\\usr\\bin;\n\npath=%Disk%:;%path_python%;%path_git%;%path_msys2%; \n 安裝make \n $ pacman -S make \n 處理完MSYS環境中的gcc之後，為了建立Windows 64位元環境下的gcc編譯環境，接下來要在先前尚未處理的MSYS環境下的版本中，安裝mingw-w64-x86_64-gcc與mingw-w64- x86_64-toolchain，下載初步尚未安裝任何gcc版本的可移植MSYS2系統，然後安裝gcc與toolchain： \n $ pacman -S mingw-w64-x86_64-gcc\n\n$ pacman -S mingw-w64-x86_64-toolchain \n 之後就可以修改start.bat啟動路徑為： \n REM 設定 msys2 64 位元的執行路徑\nset path_msys2=%Disk%:\\msys64\\mingw64\\bin;\n\npath=%Disk%:;%path_python%;%path_git%;%path_msys2%; \n 後利用此一mingw-w64-x86_64-gcc編譯放置tmp的Scintilla與Scite，只要分別進入win32目錄，然後執行make指令： \n $ mingw32-make \n 完成後，測試編譯以下簡單的C程序： \n // hello.c\n#include <stdio.h>\n\nint main() {\n    printf("Hello, world!\\n");\n    return 0;\n} \n 將此檔案存在tmp \\ c_ex目錄下，命名為hello.c 然後利用： \n gcc -o hello.exe hello.c \n 完成後將輸出一個hello.exe \n (6)安裝PortableGit於隨身系統。 \n', 'tags': '', 'url': 'W1-W5.html'}, {'title': 'W6', 'text': '因應疫情的影響，後續可能需要改由線上教學，須自行準備web cam，以下為使用安卓手機作為web cam的教學 \n 手機web cam教學 \n', 'tags': '', 'url': 'W6.html'}, {'title': 'W7', 'text': 'Youtube live+OBS串流、Google meet 線上教學 小組網站建立、使用SSH推送更新網頁。 \n', 'tags': '', 'url': 'W7.html'}, {'title': 'W8', 'text': '組長與老師開會，組員透過live streaming觀看討論過程。 \n', 'tags': '', 'url': 'W8.html'}, {'title': 'W10', 'text': 'Python and Flask \n 測試使用Python程式取出表單中學號以及對應成績 \n import csv\n\xa0\xa0\n# read student list\nfilename = \'D:/1a/1alist.txt\'\nwith open(filename, encoding="utf-8") as f:\n\xa0\xa0\xa0\xa0content = f.readlines()\n\xa0\xa0\xa0\xa0student = [x.strip() for x in content]\n#print(content)\n#print(student)\n\xa0\xa0\n# Timestamp, email, ????, url, score, desp, memo\n# 0, 1, 2, 3, 4, 5, 6\n#total = 0\n\xa0\nall = {}\nwith open(\'D:/1a/1a.csv\', encoding="utf-8") as csv_file:\n\xa0\xa0\xa0\xa0csv_reader = csv.reader(csv_file, delimiter=\',\')\n\xa0\xa0\xa0\xa0\xa0\xa0\n\xa0\xa0\xa0\xa0line_count = 0\n\xa0\xa0\xa0\xa0for row in csv_reader:\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0if line_count == 0:\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0#print(f\'Column names are {", ".join(row)}\')\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0line_count += 1\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0else:\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0student_num = row[1].split("@")[0]\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0#print(student_num)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0student_score = row[4]\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0#print(student_score)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0try:\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0all.update({student_num: student_score})\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0except:\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0all.update({student_num: "error"})\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0#print(f\'\\t{row[0]} works in the {row[1]} department, and was born in {row[2]}.\')\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0#print(f\'\\t{row[4]}\')\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0#total += int(row[4])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0line_count += 1\n#print(all)\n#print(student)\n\xa0\nfor i in student:\n\xa0\xa0\xa0\xa0\xa0\xa0\n\xa0\xa0\xa0\xa0#if i in all:\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0#pass\n\xa0\xa0\xa0\xa0#else:\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0#print(str(i))\n\xa0\xa0\xa0\xa0\xa0\xa0\n\xa0\xa0\xa0\xa0try:\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0print(i + "\\t" + all[i])\n\xa0\xa0\xa0\xa0except:\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0print(i + "\\t60")\n\xa0\n\xa0\xa0\n\xa0\xa0\xa0\xa0#print(f\'Processed {line_count} lines.\')\n\xa0\xa0\xa0\xa0#print("??=" + str(total/line_count)) \n 基本Flask \n \n \n \n from flask import Flask\n\xa0\napp = Flask(__name__)\n\xa0\n@app.route(\'/\')\ndef hello_world():\n\xa0\xa0\xa0\xa0return \'Hello, From Flask!\'\n\xa0\nif __name__== \'__main__\':\n\xa0\xa0\xa0\xa0app.run() \n 以此為基本再進行延伸。 \n', 'tags': '', 'url': 'W10.html'}, {'title': 'W11-W13', 'text': '建立虛擬主機 \n 前面步驟為安裝設定重點為ipv4及ipv6網路設定都為自動 \n 進入介面後，再輸入指令 \n sudo vi 00-installer-config.yaml \n 修改檔案與下圖相符 \n \n \xa0 輸入指令 \n sudo netplan apply \n ping4 140.130.15.254 \n 網路部分設定完成 \n 安裝pip3 \n sudo apt install net-tools \n \n sudo apt update \n \n sudo apt install python3-pip \n 利用pip3安裝flask flask_cors bs4 lxml markdown \n sudo\xa0pip3 install\xa0flask flask_cors bs4 lxml markdown \n 建立github資料夾 \n mkdir github \n 安裝桌面 \n sudo apt install xorg \n sudo apt install fluxbox \n sudo apt install lxde \n 重開虛擬主機如下: \n \n', 'tags': '', 'url': 'W11-W13.html'}, {'title': 'W14', 'text': 'MBR與GPT磁碟分割之差異 \n MBR:MBR為Master Boot Record Boot Record的縮寫，為1983年由IBM公司所提出的分割表格式。 \n 位於硬碟開始部份的一個特殊磁區，內含系統載入器及硬碟邏輯分割區資訊。啟動系統時會從磁區內使用代碼來啟動系統，若MBR之啟動資訊損壞，則系統無法正常啟動。 \n MBR只能用於最大容量為2TB的硬碟，如果使用超過2TB之硬碟，多出來的部分將無法被辨識。MBR最多只支援將硬碟設定為四個主要磁碟分割。 \n 使用MBR啟動電腦時，將先啟動主機板之BIOS，隨後BIOS載入MBR，最後MBR啟動系統。 \n GPT:GPT為GUID Partition Tableartition Table的縮寫，其更加符合現代需求，故成為逐漸取代MBR的新標準。GPT最凸顯的優勢在於它突破了MBR最大只支援2T硬碟的限制，同時使用者可以將硬碟劃分數量不限的分割槽，雖然Windows只允許GPT硬碟上最多有128個分區，但128個分區基本上已經能滿足所有人群的使用需求。 \n 另外，GPT並不會把引導資料都存儲在一個位置，從資訊安全的角度來看比MBR更加優秀。 \n', 'tags': '', 'url': 'W14.html'}, {'title': 'W15', 'text': '利用Pypdf2切割pdf檔 \n 切割PDF之.py程式檔 \n # pypdf2_ex1.py\nimport os\nfrom PyPDF2 import PdfFileWriter, PdfFileReader\n   \npdfReader = PdfFileReader(open("2002_Book_Real-WorldASPNETBuildingAConte.pdf", "rb"))\ninformation = [("WhatIsCMS",18,45)]\n   \nfor page in range(len(information)):\n    pdf_writer = PdfFileWriter()\n    start = information[page][1]\n    end = information[page][2]\n    while start<=end:\n        pdf_writer.addPage(pdfReader.getPage(start-1))\n        start+=1\n    if not os.path.exists("./"):\n        os.makedirs(savepath)\n    output_filename = \'{}_{}_page_{}.pdf\'.format(information[page][0],information[page][1], information[page][2])\n    with open(output_filename,\'wb\') as out:\n        pdf_writer.write(out)\n \n \n \n', 'tags': '', 'url': 'W15.html'}, {'title': 'W16-W17', 'text': '利用pypdf2擷取pdf與合併pdf的程式，並利用API放上動態網站測試。 \n 利用pypdf2擷取出3個pdf檔 \n # pypdf2_ex2.py\nimport os\nfrom PyPDF2 import PdfFileWriter, PdfFileReader\n \npdfReader = PdfFileReader(open("2019_Book_PracticalFlutter.pdf", "rb"))\ninformation = [("GitAndGithub",16,26),("GitAndGithub",36,46),("GitAndGithub",196,289)]\n \nfor page in range(len(information)):\n    pdf_writer = PdfFileWriter()\n    start = information[page][1]\n    end = information[page][2]\n    while start<=end:\n        pdf_writer.addPage(pdfReader.getPage(start-1))\n        start+=1\n    if not os.path.exists("./"):\n        os.makedirs(savepath)\n    output_filename = \'{}_{}_page_{}.pdf\'.format(information[page][0],information[page][1], information[page][2])\n    with open(output_filename,\'wb\') as out:\n        pdf_writer.write(out) \n 再使用以下程式合併成一個pdf檔 \n # pypdf2_ex3.py\n# merge several pdf files\nimport sys\nimport PyPDF2\n\npdf_write_object = PyPDF2.PdfFileWriter()\n\n#for i in sys.argv[1:]:\nfor i in ["GitAndGithub_16_page_26.pdf","GitAndGithub_36_page_46.pdf","GitAndGithub_196_page_289.pdf"]:\npdf_read_object = PyPDF2.PdfFileReader(i)\nprint(\'processing file : \'+ i + \'number of pages : \' + str(pdf_read_object.numPages))\nfor page in range(pdf_read_object.numPages):\npdf_write_object.addPage(pdf_read_object.getPage(page))\n\nfinal_file_object = open(\'2020CMS.pdf\', \'wb\')\npdf_write_object.write(final_file_object)\nfinal_file_object.close()\n\n \n \n Google API \n \n', 'tags': '', 'url': 'W16-W17.html'}, {'title': '操作內容教學', 'text': '', 'tags': '', 'url': '操作內容教學.html'}, {'title': '產生SSH KEY', 'text': '利用隨身系統輸入指令sh，如下圖 \n \n 輸入指令ssh-keygen -t rsa -b 4096 -C "學號" \n 預設之金鑰儲存在y:\\home\\.ssh目錄裡 \n \n 使用puttygen將private key(id_rsa)導入，並轉換為putty能夠讀懂的格式(.ppk)檔案 \n 存好(.ppk)檔後 \n \n 使用scite將public key (id_rsa.pub)打開，到工具列找到Options-->Wrap就能看建完整的檔案內容 \n \n 按下後將顯示完整內容如下: \n \n 將完整public key內容複製，進入github右上角下拉選單點擊settings \n \n 點擊SSH and GPG keys \n \n 點擊New SSH key，將複製的內容貼上並儲存就可以使用了 \n \n', 'tags': '', 'url': '產生SSH KEY.html'}, {'title': 'SSH Putty設定', 'text': '\n 畫線處請選擇前面步驟所生成之.ppk檔案 \n \n 記得回到Session中按下save存檔，如果這台電腦只有自己使用的話，儲存後沒有特殊情況是不需要重新設定此步驟的: \n \n 接下來有最後一個步驟需要進入你要push的資料夾，此處以wcm2020為例: \n 進入Y:\\tmp\\wcm2020\\.git內修改config檔案 \n 從 \n \n 修改為 \n \n \n \n', 'tags': '', 'url': 'SSH Putty設定.html'}]};