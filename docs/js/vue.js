        // 方法一 (資料可以改動)
          // ;(function(){
  
          //     new Vue({
          //         el: '#Footer',
          //         data:{
          //             copyright: '版權所有 翻印必究',
          //             company: "Dan Wu",
          //             year: '@' + new Date().getFullYear(),
  
          //         },
          //     })

          //     Object.freeze(data)
  
          // })()

        // 方法二 
        let data = {
            name : '吳昱諄',
            birthday : '1997/12/02',
            blood : 'Ｏ型',
            school : '彰化師大資管系數科組 碩一',
            license : ['乙級-電腦硬體裝修', 'TQC-World(2016)', 'TQC+程式語言(Python)'],
        //Study experience    
            study : ['●國立埔里高級工業職業學校-微電腦修護科(畢業)', '●嶺東科大-資管系(轉學)', '●朝陽科大-資管系(畢業)',],
            currentjob : ['●彰化師大-資管系數科組 碩士班'],
        //Work experience
            work1 : ['NU PAST', '日漫咖啡', '朵朵雲典藏鬆餅咖啡'],
            workexp1 : ['●學習餐點的製作', '●面對客人間的溝通', '●問題間的危機處理'],
            work2 : '百佳泰股份有限公司-測試工程師(實習生)',
            workexp2 : ['●更加瞭解科技產業', '●設備上的故障排除', '●測試硬體設備'],
        //activity experience
            activity : '●朝陽科大校隊男排',
            // footer
            copyright : '版權所有 翻印必究',
            company: 'Dan Wu',
            year: '@' + new Date().getFullYear(),
          }

          let vm = new Vue({
            el: '#app', 
            data: data,
          })
