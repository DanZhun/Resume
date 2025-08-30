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
            blood : 'A型',
            MBTI : 'INTJ-A',
            school : '彰化師大資管系 數位內容科技與管理 研究所',
            license : ['乙級-電腦硬體裝修', 'TQC-World(2016)', 'TQC+程式語言(Python)',],
        //Study experience    
            study : [ '● 2022/9-2025/7 彰化師大資管系 數科所 (畢業)','● 2018/9-2021/6 朝陽科大-資管系(畢業)'],
            currentjob : ['● 彰化師大-資管系數科組 碩士班'],
        //Work experience
            work1 : ['NU PAST', '日漫咖啡', '朵朵雲典藏鬆餅咖啡(工讀生)'],
            workexp1 : ['●主要餐點飲料製作 (80%)','●服務客人 (100%)','●問題處理 (20%)'],
            work2 : '2021/6-2022/1 百佳泰股份有限公司-測試工程師(實習生)',
            work2 : '百佳泰股份有限公司-測試工程師(實習生 2021/6~2022/1)',
            workexp2 : ['●設備測試 (100%)', '●設備故障排除 (100%)', '●紀錄測試數據 (80%)'],
            work3 : ['國泰人壽 專招業務','職級 : ','業務主任'],
            workexp3 : ['●保單健檢','●保險規劃','●理財規劃','●商品銷售'],
        //activity experience
            activity :['●朝陽科大 一般組 男排','●彰化師大 一般組 男排'],
            experience:[],
            // footer
            copyright : '版權所有 翻印必究',
            company: 'Dan Wu',
            year: '©' + new Date().getFullYear(),
          }

          let vm = new Vue({
            el: '#app', 
            data: data,
          })
