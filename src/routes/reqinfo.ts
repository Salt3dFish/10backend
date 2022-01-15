import Router from 'express'

const router=Router();



router.get('/swipper',(_req,res)=>{
  const length=6; //swipper中图片的个数
  const imgsAddress:string[]=new Array(length);
  const baseUrl='http://localhost:3003/public/images/index/swipper/'
  for (let i=1;i<=length;i++){
    imgsAddress[i-1]=baseUrl+i+'.jpg'
  }
  res.json({
    nums:length,
    imgsAddress:imgsAddress
  })
})

router.get('/gallery/:index',(req,res)=>{
  const length=6;
  const baseUrl='http://localhost:3003/public/images/gallery/'
  const index=req.params.index;
  const imgsAddress:string[]=new Array(length)
  let addr;
  switch (index) {
    case 'all':addr='all';break;
    case 'wedding':addr='wedding';break;
    case 'activity':addr='activity';break;
    case 'gov':addr='government';break;
    case 'mfilm':addr='minifilm';break;
    case 'about':addr='aboutus';break;
    default :addr='all';break;
  }
  for (let i=1;i<=length;i++){
    imgsAddress[i-1]=baseUrl+addr+'/'+i+'.jpg'
  }
  res.json({
    nums:length,
    imgsAddress:imgsAddress,
  })
})


export default router;