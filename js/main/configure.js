﻿/**
 * Created by deng on 2017/7/13.
 */
define(function () {
    return Configure;
});
var Configure={
    "partial/home/psIndex":{loadJs:['./partial/home/psIndex'],styles:['css!../css/partial/home/psIndex.css','css!../css/partial/home/weather.css','css!../css/partial/home/plantView.css','css!../css/partial/home/plantIncom.css','css!../css/partial/home/plantMap.css','css!../css/partial/home/energyStatics.css','css!../css/partial/home/chargePower.css','css!../css/partial/home/energeFlow.css','css!../css/partial/home/bottom.css']},
    "partial/main":{loadJs:['./partial/main','Echarts'],styles:['css!../css/partial/main.css']},
    "partial/povertyAlleviation/povertyAlleviation":{
        loadJs:['./partial/povertyAlleviation/povertyAlleviation','Echarts'],
        styles:['css!../css/partial/povertyAlleviation/povertyAlleviation.css']
    },
    "partial/login":{loadJs:['./partial/login','./plugins/jquery.qrcode.min','./plugins/gVerify/js/gVerify'],styles:['css!../css/partial/login.css']},
    "partial/analysisReport/arIndex":{loadJs:['./partial/analysisReport/arIndex','./plugins/doublebox-bootstrap/doublebox-bootstrap'],styles:['css!../css/partial/analysisReport/arIndex.css','css!./plugins/doublebox-bootstrap/doublebox-bootstrap.css']},
    "partial/io/ioIndex":{loadJs:['./partial/io/ioIndex'],styles:['css!../css/partial/io/ioIndex.css']},
    "partial/analysisReport/hisDataLine":{loadJs:['./partial/analysisReport/hisDataLine'],styles:['css!../css/partial/analysisReport/hisDataLine.css']},
    "partial/analysisReport/PlRunReport/runReportIndex":{loadJs:['./partial/analysisReport/PlRunReport/runReportIndex'],styles:['css!../css/partial/analysisReport/PlRunReport/runReportIndex.css']},
    "partial/analysisReport/plantComRep":{loadJs:['./partial/analysisReport/plantComRep'],styles:['css!../css/partial/analysisReport/plantComRep.css']},
    "partial/analysisReport/electricityReport":{loadJs:['./partial/analysisReport/electricityReport'],styles:['css!../css/partial/analysisReport/electricityReport.css']},
    "partial/plantMonitor/pmManyPlant/pmManyPlant":{loadJs:['./partial/plantMonitor/pmManyPlant/pmManyPlant'],styles:['css!../css/partial/plantMonitor/pmManyPlant.css']},
    "partial/plantMonitor/pmManyPlant/loadCarousel":{loadJs:['./partial/plantMonitor/pmManyPlant/loadCarousel'],styles:['css!../css/partial/plantMonitor/pmManyPlant.css']},
    "partial/plantMonitor/pmManyPlant/photovoltaic":{loadJs:['./partial/plantMonitor/pmManyPlant/photovoltaic'],styles:['css!../css/partial/plantMonitor/pmManyPlant.css']},
    "partial/plantMonitor/pmManyPlant/realTimeInfo":{loadJs:['./partial/plantMonitor/pmManyPlant/realTimeInfo'],styles:['css!../css/partial/plantMonitor/pmManyPlant.css']},
    "partial/plantMonitor/pmBattery/pmBattery":{loadJs:['./partial/plantMonitor/pmBattery/pmBattery'],styles:['css!../css/partial/plantMonitor/pmBattery/pmBattery.css']},
    "partial/plantMonitor/pmManyPlant/photovoltaicTable":{loadJs:['./partial/plantMonitor/pmManyPlant/photovoltaicTable'],styles:['css!../css/partial/plantMonitor/pmManyPlant.css']},
    "partial/plantMonitor/pmSingleIndex":{loadJs:['./partial/plantMonitor/pmSingleIndex','./synpowerCamera'],styles:['css!../css/partial/plantMonitor/pmSingleIndex.css']},
    "partial/plantMonitor/pmSinglePlant":{loadJs:['./partial/plantMonitor/pmSinglePlant','Echarts','./plugins/ezuikit/ezuikit'],styles:['css!../css/partial/plantMonitor/pmSinglePlant.css']},
    "partial/plantMonitor/spContribution":{loadJs:['./partial/plantMonitor/spContribution'],styles:[]},
    "partial/plantMonitor/spGenCount":{loadJs:['./partial/plantMonitor/spGenCount'],styles:[]},
    "partial/plantMonitor/spInfo":{loadJs:['./partial/plantMonitor/spInfo'],styles:[]},
    "partial/plantMonitor/spPower":{loadJs:['./partial/plantMonitor/spPower'],styles:[]},
    "partial/plantMonitor/spProfit":{loadJs:['./partial/plantMonitor/spProfit'],styles:[]},
    "partial/plantMonitor/spWeather":{loadJs:['./partial/plantMonitor/spWeather'],styles:[]},
    "partial/plantMonitor/spStatusCap":{loadJs:['./partial/plantMonitor/spStatusCap'],styles:[]},
    "partial/plantMonitor/pmSingleDevice":{loadJs:['./partial/plantMonitor/pmSingleDevice'],styles:['css!../css/partial/plantMonitor/pmSingleDevice.css']},
//    单电站-储能topo
    "partial/plantMonitor/spcnTopo":{loadJs:['./partial/plantMonitor/spcnTopo','./plugins/jtopo-0.4.8-min'],styles:['css!../css/partial/plantMonitor/spcnTopo']},
//    单电站-光储topo
    "partial/plantMonitor/spcnTopo":{loadJs:['./partial/plantMonitor/spcnTopo','./plugins/jtopo-0.4.8-min'],styles:['css!../css/partial/plantMonitor/spcnTopo']},
//    单电站-光伏topo
    "partial/plantMonitor/spgfTopo":{loadJs:['./partial/plantMonitor/spgfTopo'],styles:['css!../css/partial/plantMonitor/spgcTopo']},
    "partial/largeScreen/index":{loadJs:['./partial/largeScreen/index','Echarts','./plugins/flipclock/js/flipclock','./plugins/ezuikit/ezuikit','./synpowerCamera'],styles:['css!../css/partial/largeScreen/index.css','css!./plugins/flipclock/css/flipclock.css']},
    "partial/largeScreen/loadPage/companyInfo":{loadJs:['./partial/largeScreen/loadPage/companyInfo'],styles:['css!../css/partial/largeScreen/loadPage/companyInfo.css']},
    "partial/largeScreen/loadPage/plantScale":{loadJs:['./partial/largeScreen/loadPage/plantScale'],styles:['css!../css/partial/largeScreen/loadPage/plantScale.css']},
    "partial/largeScreen/loadPage/plantDis":{loadJs:['./partial/largeScreen/loadPage/plantDis'],styles:['css!../css/partial/largeScreen/loadPage/plantDis.css']},
    "partial/largeScreen/loadPage/equipmentDis":{loadJs:['./partial/largeScreen/loadPage/equipmentDis'],styles:['css!../css/partial/largeScreen/loadPage/equipmentDis.css']},
    "partial/largeScreen/loadPage/plantOper":{loadJs:['./partial/largeScreen/loadPage/plantOper'],styles:['css!../css/partial/largeScreen/loadPage/plantOper.css']},
    "partial/largeScreen/loadPage/contribution":{loadJs:['./partial/largeScreen/loadPage/contribution'],styles:['css!../css/partial/largeScreen/loadPage/contribution.css']},
    "partial/setting/stIndex":{loadJs:['./partial/setting/stIndex'],styles:['css!../css/partial/setting/stIndex.css']},
    "partial/setting/AccountAndAuthority/AccountAndAuthority":{loadJs:['./partial/setting/AccountAndAuthority/AccountAndAuthority'],styles:['css!../css/partial/setting/AccountAndAuthority.css']},
    "partial/setting/AccountAndAuthority/aboutMe":{loadJs:['./partial/setting/AccountAndAuthority/aboutMe'],styles:['css!../css/partial/setting/aboutMe.css']},
    "partial/setting/AccountAndAuthority/edit":{loadJs:['./partial/setting/AccountAndAuthority/edit'],styles:['css!../css/partial/setting/edit.css']},
    "partial/setting/AccountAndAuthority/organizationalInfo":{loadJs:['./partial/setting/AccountAndAuthority/organizationalInfo','./plugins/ztree/js/jquery.ztree.all'],styles:['css!../css/partial/setting/organizationalInfo.css']},
    "partial/setting/AccountAndAuthority/AccountManagement":{loadJs:['./partial/setting/AccountAndAuthority/AccountManagement','./plugins/ztree/js/jquery.ztree.all'],styles:['css!../css/partial/setting/AccountManagement.css','css!../css/partial/setting/organizationalInfo.css']},
    "partial/setting/AccountAndAuthority/powerStation":{loadJs:['./partial/setting/AccountAndAuthority/powerStation','./plugins/ztree/js/jquery.ztree.all'],styles:['css!../css/partial/setting/powerStation.css','css!../css/partial/setting/organizationalInfo.css']},
    "partial/setting/AccountAndAuthority/roleAuthority":{loadJs:['./partial/setting/AccountAndAuthority/roleAuthority','./plugins/ztree/js/jquery.ztree.all'],styles:['css!../css/partial/setting/roleAuthority.css','css!../css/partial/setting/organizationalInfo.css']},
    "partial/setting/systemSetup/systemSetup":{loadJs:['./partial/setting/systemSetup/systemSetup'],styles:['css!../css/partial/setting/systemSetup/systemSetup.css']},
    "partial/setting/systemSetup/systemSetupPage":{loadJs:['./partial/setting/systemSetup/systemSetupPage'],styles:['css!../css/partial/setting/systemSetup/systemSetupPage.css']},
    "partial/setting/systemSetup/enterpriseSetting":{loadJs:['./partial/setting/systemSetup/enterpriseSetting'],styles:['css!../css/partial/setting/systemSetup/enterpriseSetting.css','css!../css/partial/setting/organizationalInfo.css']},
    "partial/setting/systemSetup/other":{loadJs:['./partial/setting/systemSetup/other'],styles:['css!../css/partial/setting/systemSetup/other.css','css!../css/partial/setting/organizationalInfo.css']},
    "partial/setting/plantManage/plantInfo":{loadJs:['./partial/setting/plantManage/plantInfo'],styles:['css!../css/partial/setting/plantManage/plantInfo']},
    "partial/setting/deviceManage/deviceManageIndex":{loadJs:['./partial/setting/deviceManage/deviceManageIndex'],styles:['css!../css/partial/setting/deviceManage/deviceManageIndex']},
    "partial/setting/deviceManage/inverterManage":{loadJs:['./partial/setting/deviceManage/inverterManage'],styles:['css!../css/partial/setting/deviceManage/inverterManage']},
    "partial/setting/deviceManage/assembly":{loadJs:['./partial/setting/deviceManage/assembly','./plugins/dataTables/media/js/fixedColumn'],styles:['css!../css/partial/setting/deviceManage/assembly.css','css!./plugins/dataTables/media/css/fixedColumns.dataTables.min.css']},
    "partial/setting/deviceManage/devInvEle":{loadJs:['./partial/setting/deviceManage/devInvEle'],styles:['css!../css/partial/setting/deviceManage/devInvEle']},
    "partial/setting/deviceManage/dauInvCam":{loadJs:['./partial/setting/deviceManage/dauInvCam'],styles:['css!../css/partial/setting/deviceManage/dauInvCam']},
    "partial/setting/deviceManage/dau":{loadJs:['./partial/setting/deviceManage/dau'],styles:['css!../css/partial/setting/deviceManage/dau']},
    "partial/setting/deviceManage/inverterDevice":{loadJs:['./partial/setting/deviceManage/inverterDevice'],styles:['css!../css/partial/setting/deviceManage/inverterDevice']},
    "partial/setting/deviceManage/camera":{loadJs:['./partial/setting/deviceManage/camera','./plugins/ezuikit/ezuikit','./synpowerCamera'],styles:['css!../css/partial/setting/deviceManage/camera']},
    "partial/setting/deviceManage/cameraManage":{loadJs:['./partial/setting/deviceManage/cameraManage'],styles:['css!../css/partial/setting/deviceManage/cameraManage']},
//    能耗系统
    "partial/energyEfficient/index":{loadJs:['./partial/energyEfficient/index','Echarts'],styles:['css!../css/partial/energyEfficient/index']},
    "partial/energyEfficient/activeMonitor/index":{loadJs:['./partial/energyEfficient/activeMonitor/index'],styles:['css!../css/partial/energyEfficient/activeMonitor/index']},
    "partial/energyEfficient/activeMonitor/electricity":{loadJs:['./partial/energyEfficient/activeMonitor/electricity'],styles:['css!../css/partial/energyEfficient/activeMonitor/electricity']},
    "partial/energyEfficient/activeMonitor/electricityQuality":{loadJs:['./partial/energyEfficient/activeMonitor/electricityQuality'],styles:['css!../css/partial/energyEfficient/activeMonitor/electricityQuality']},
    "partial/energyEfficient/activeMonitor/enterpriseInfo":{loadJs:['./partial/energyEfficient/activeMonitor/enterpriseInfo'],styles:['css!../css/partial/energyEfficient/activeMonitor/enterpriseInfo']},
    "partial/energyEfficient/activeMonitor/useElecKPI":{loadJs:['./partial/energyEfficient/activeMonitor/useElecKPI'],styles:['css!../css/partial/energyEfficient/activeMonitor/useElecKPI']},
    "partial/energyEfficient/activeMonitor/useElecLoadKPI":{loadJs:['./partial/energyEfficient/activeMonitor/useElecLoadKPI'],styles:['css!../css/partial/energyEfficient/activeMonitor/useElecLoadKPI']},
    "partial/energyEfficient/activeMonitor/useElectricity":{loadJs:['./partial/energyEfficient/activeMonitor/useElectricity'],styles:['css!../css/partial/energyEfficient/activeMonitor/useElectricity']},
};
