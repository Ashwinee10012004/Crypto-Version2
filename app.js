// Cryptocurrency data
const cryptoData = {
    "BTC": {
        "name": "Bitcoin",
        "symbol": "BTC",
        "current_price": 107227.63,
        "color": "#1FB8CD",
        "data": [{"ds":"2025-08-09T00:00:00.000","yhat":107227.6327655456},{"ds":"2025-08-10T00:00:00.000","yhat":107268.7386891655},{"ds":"2025-08-11T00:00:00.000","yhat":107313.034750321},{"ds":"2025-08-12T00:00:00.000","yhat":107420.4197851771},{"ds":"2025-08-13T00:00:00.000","yhat":107448.6591905415},{"ds":"2025-08-14T00:00:00.000","yhat":107584.0020188606},{"ds":"2025-08-15T00:00:00.000","yhat":107572.7304325755},{"ds":"2025-08-16T00:00:00.000","yhat":107645.9403619819},{"ds":"2025-08-17T00:00:00.000","yhat":107701.3810807739},{"ds":"2025-08-18T00:00:00.000","yhat":107759.68804597},{"ds":"2025-08-19T00:00:00.000","yhat":107880.2166120548},{"ds":"2025-08-20T00:00:00.000","yhat":107920.2609230448},{"ds":"2025-08-21T00:00:00.000","yhat":108065.6807533584},{"ds":"2025-08-22T00:00:00.000","yhat":108062.457906406},{"ds":"2025-08-23T00:00:00.000","yhat":108141.480938829},{"ds":"2025-08-24T00:00:00.000","yhat":108200.3859354912},{"ds":"2025-08-25T00:00:00.000","yhat":108259.7877766857},{"ds":"2025-08-26T00:00:00.000","yhat":108379.1096803664},{"ds":"2025-08-27T00:00:00.000","yhat":108415.7955663895},{"ds":"2025-08-28T00:00:00.000","yhat":108555.9283174265},{"ds":"2025-08-29T00:00:00.000","yhat":108545.7758984237},{"ds":"2025-08-30T00:00:00.000","yhat":108616.5644921013},{"ds":"2025-08-31T00:00:00.000","yhat":108666.3067885001},{"ds":"2025-09-01T00:00:00.000","yhat":108716.0202926442},{"ds":"2025-09-02T00:00:00.000","yhat":108825.543851915},{"ds":"2025-09-03T00:00:00.000","yhat":108852.7373520855},{"ds":"2025-09-04T00:00:00.000","yhat":108984.0880297502},{"ds":"2025-09-05T00:00:00.000","yhat":108966.2456963708},{"ds":"2025-09-06T00:00:00.000","yhat":109030.7863158835},{"ds":"2025-09-07T00:00:00.000","yhat":109076.03230201},{"ds":"2025-09-08T00:00:00.000","yhat":109123.2645658754},{"ds":"2025-09-09T00:00:00.000","yhat":109232.5346172345},{"ds":"2025-09-10T00:00:00.000","yhat":109261.861704233},{"ds":"2025-09-11T00:00:00.000","yhat":109397.8384108571},{"ds":"2025-09-12T00:00:00.000","yhat":109387.1669175366},{"ds":"2025-09-13T00:00:00.000","yhat":109461.4252211564},{"ds":"2025-09-14T00:00:00.000","yhat":109518.8914860335},{"ds":"2025-09-15T00:00:00.000","yhat":109580.7613214101},{"ds":"2025-09-16T00:00:00.000","yhat":109706.9660229245},{"ds":"2025-09-17T00:00:00.000","yhat":109755.3764766925},{"ds":"2025-09-18T00:00:00.000","yhat":109912.4158493428},{"ds":"2025-09-19T00:00:00.000","yhat":109924.6029750066},{"ds":"2025-09-20T00:00:00.000","yhat":110023.3254530303},{"ds":"2025-09-21T00:00:00.000","yhat":110106.6703673995},{"ds":"2025-09-22T00:00:00.000","yhat":110195.6471937432},{"ds":"2025-09-23T00:00:00.000","yhat":110350.0107402114},{"ds":"2025-09-24T00:00:00.000","yhat":110427.4686744122},{"ds":"2025-09-25T00:00:00.000","yhat":110614.2966623811},{"ds":"2025-09-26T00:00:00.000","yhat":110656.8829849261},{"ds":"2025-09-27T00:00:00.000","yhat":110786.5016517927},{"ds":"2025-09-28T00:00:00.000","yhat":110901.141982425},{"ds":"2025-09-29T00:00:00.000","yhat":111021.7293249626},{"ds":"2025-09-30T00:00:00.000","yhat":111207.9449087251},{"ds":"2025-10-01T00:00:00.000","yhat":111317.4295681188},{"ds":"2025-10-02T00:00:00.000","yhat":111536.3945788373},{"ds":"2025-10-03T00:00:00.000","yhat":111611.1617070284},{"ds":"2025-10-04T00:00:00.000","yhat":111772.9317382559},{"ds":"2025-10-05T00:00:00.000","yhat":111919.6097026474},{"ds":"2025-10-06T00:00:00.000","yhat":112072.0217069608},{"ds":"2025-10-07T00:00:00.000","yhat":112289.7315898503},{"ds":"2025-10-08T00:00:00.000","yhat":112430.2423324211},{"ds":"2025-10-09T00:00:00.000","yhat":112679.6056243835},{"ds":"2025-10-10T00:00:00.000","yhat":112783.961804543},{"ds":"2025-10-11T00:00:00.000","yhat":112974.3095140618},{"ds":"2025-10-12T00:00:00.000","yhat":113148.3333005819},{"ds":"2025-10-13T00:00:00.000","yhat":113326.6240540699},{"ds":"2025-10-14T00:00:00.000","yhat":113568.5004094826},{"ds":"2025-10-15T00:00:00.000","yhat":113731.2159179647},{"ds":"2025-10-16T00:00:00.000","yhat":114000.5752112387},{"ds":"2025-10-17T00:00:00.000","yhat":114122.4811626564},{"ds":"2025-10-18T00:00:00.000","yhat":114327.712135602},{"ds":"2025-10-19T00:00:00.000","yhat":114513.7572855743},{"ds":"2025-10-20T00:00:00.000","yhat":114701.0445104355},{"ds":"2025-10-21T00:00:00.000","yhat":114948.768893128},{"ds":"2025-10-22T00:00:00.000","yhat":115114.1061537647},{"ds":"2025-10-23T00:00:00.000","yhat":115382.8340674578},{"ds":"2025-10-24T00:00:00.000","yhat":115500.8836096242},{"ds":"2025-10-25T00:00:00.000","yhat":115699.118713688},{"ds":"2025-10-26T00:00:00.000","yhat":115875.1724459824},{"ds":"2025-10-27T00:00:00.000","yhat":116049.6740820379},{"ds":"2025-10-28T00:00:00.000","yhat":116282.0748747799},{"ds":"2025-10-29T00:00:00.000","yhat":116429.8570378485},{"ds":"2025-10-30T00:00:00.000","yhat":116679.1489682667},{"ds":"2025-10-31T00:00:00.000","yhat":116776.2685991477},{"ds":"2025-11-01T00:00:00.000","yhat":116952.4939547399},{"ds":"2025-11-02T00:00:00.000","yhat":117105.8889538167},{"ds":"2025-11-03T00:00:00.000","yhat":117257.5192340343},{"ds":"2025-11-04T00:00:00.000","yhat":117467.2661151873},{"ds":"2025-11-05T00:00:00.000","yhat":117593.0235811387},{"ds":"2025-11-06T00:00:00.000","yhat":117821.3016793924},{"ds":"2025-11-07T00:00:00.000","yhat":117898.7586100885},{"ds":"2025-11-08T00:00:00.000","yhat":118056.9609517886},{"ds":"2025-11-09T00:00:00.000","yhat":118194.2004266912},{"ds":"2025-11-10T00:00:00.000","yhat":118331.7023039665},{"ds":"2025-11-11T00:00:00.000","yhat":118529.4338432121},{"ds":"2025-11-12T00:00:00.000","yhat":118645.2978895387},{"ds":"2025-11-13T00:00:00.000","yhat":118865.7351898041},{"ds":"2025-11-14T00:00:00.000","yhat":118937.2578039383},{"ds":"2025-11-15T00:00:00.000","yhat":119091.2130875036},{"ds":"2025-11-16T00:00:00.000","yhat":119225.6066005429},{"ds":"2025-11-17T00:00:00.000","yhat":119361.3189170417},{"ds":"2025-11-18T00:00:00.000","yhat":119557.9245377328},{"ds":"2025-11-19T00:00:00.000","yhat":119672.8977479564},{"ds":"2025-11-20T00:00:00.000","yhat":119892.2286564314},{"ds":"2025-11-21T00:00:00.000","yhat":119961.9714002306},{"ds":"2025-11-22T00:00:00.000","yhat":120113.0235592187},{"ds":"2025-11-23T00:00:00.000","yhat":120242.9646703587},{"ds":"2025-11-24T00:00:00.000","yhat":120372.2883334504},{"ds":"2025-11-25T00:00:00.000","yhat":120560.2356247996},{"ds":"2025-11-26T00:00:00.000","yhat":120664.014185809},{"ds":"2025-11-27T00:00:00.000","yhat":120869.4257741792},{"ds":"2025-11-28T00:00:00.000","yhat":120922.4238559248},{"ds":"2025-11-29T00:00:00.000","yhat":121053.8999290322},{"ds":"2025-11-30T00:00:00.000","yhat":121161.5261836204},{"ds":"2025-12-01T00:00:00.000","yhat":121265.9887819413},{"ds":"2025-12-02T00:00:00.000","yhat":121426.8193520675},{"ds":"2025-12-03T00:00:00.000","yhat":121501.6090310873},{"ds":"2025-12-04T00:00:00.000","yhat":121676.6279089463},{"ds":"2025-12-05T00:00:00.000","yhat":121698.3716096076},{"ds":"2025-12-06T00:00:00.000","yhat":121798.3339513404},{"ds":"2025-12-07T00:00:00.000","yhat":121874.8336291026},{"ds":"2025-12-08T00:00:00.000","yhat":121949.2296194671},{"ds":"2025-12-09T00:00:00.000","yhat":122081.7333873609},{"ds":"2025-12-10T00:00:00.000","yhat":122130.6027711873},{"ds":"2025-12-11T00:00:00.000","yhat":122282.7409786076},{"ds":"2025-12-12T00:00:00.000","yhat":122285.2230347234},{"ds":"2025-12-13T00:00:00.000","yhat":122370.0492359372},{"ds":"2025-12-14T00:00:00.000","yhat":122435.9541522193},{"ds":"2025-12-15T00:00:00.000","yhat":122504.6064481579},{"ds":"2025-12-16T00:00:00.000","yhat":122636.4081245506},{"ds":"2025-12-17T00:00:00.000","yhat":122689.6785155365},{"ds":"2025-12-18T00:00:00.000","yhat":122851.2468529278},{"ds":"2025-12-19T00:00:00.000","yhat":122867.9760268023},{"ds":"2025-12-20T00:00:00.000","yhat":122971.5172803328},{"ds":"2025-12-21T00:00:00.000","yhat":123060.1244559532},{"ds":"2025-12-22T00:00:00.000","yhat":123154.8630226053},{"ds":"2025-12-23T00:00:00.000","yhat":123315.422328826},{"ds":"2025-12-24T00:00:00.000","yhat":123399.3161453381},{"ds":"2025-12-25T00:00:00.000","yhat":123592.4949284983},{"ds":"2025-12-26T00:00:00.000","yhat":123640.8919530916},{"ds":"2025-12-27T00:00:00.000","yhat":123775.2024833605},{"ds":"2025-12-28T00:00:00.000","yhat":123892.7239563277},{"ds":"2025-12-29T00:00:00.000","yhat":124013.5917071612},{"ds":"2025-12-30T00:00:00.000","yhat":124196.617943327},{"ds":"2025-12-31T00:00:00.000","yhat":124298.5182755908},{"ds":"2026-01-01T00:00:00.000","yhat":124504.5484852887},{"ds":"2026-01-02T00:00:00.000","yhat":124560.0729497077},{"ds":"2026-01-03T00:00:00.000","yhat":124695.3632143033},{"ds":"2026-01-04T00:00:00.000","yhat":124807.4540724539},{"ds":"2026-01-05T00:00:00.000","yhat":124916.391154653},{"ds":"2026-01-06T00:00:00.000","yhat":125081.0773081957},{"ds":"2026-01-07T00:00:00.000","yhat":125158.5017658293},{"ds":"2026-01-08T00:00:00.000","yhat":125334.3746003016},{"ds":"2026-01-09T00:00:00.000","yhat":125354.6878386581},{"ds":"2026-01-10T00:00:00.000","yhat":125450.5018154138},{"ds":"2026-01-11T00:00:00.000","yhat":125519.7843539753},{"ds":"2026-01-12T00:00:00.000","yhat":125583.6371412259},{"ds":"2026-01-13T00:00:00.000","yhat":125702.1170658408},{"ds":"2026-01-14T00:00:00.000","yhat":125733.4371233119},{"ds":"2026-01-15T00:00:00.000","yhat":125864.5700891838},{"ds":"2026-01-16T00:00:00.000","yhat":125842.7771210223},{"ds":"2026-01-17T00:00:00.000","yhat":125900.3607164814},{"ds":"2026-01-18T00:00:00.000","yhat":125936.4705040791},{"ds":"2026-01-19T00:00:00.000","yhat":125973.2971338599},{"ds":"2026-01-20T00:00:00.000","yhat":126071.8629310594},{"ds":"2026-01-21T00:00:00.000","yhat":126091.1947737948},{"ds":"2026-01-22T00:00:00.000","yhat":126218.9031956081},{"ds":"2026-01-23T00:00:00.000","yhat":126202.6905911703},{"ds":"2026-01-24T00:00:00.000","yhat":126275.088567812},{"ds":"2026-01-25T00:00:00.000","yhat":126335.2534140199},{"ds":"2026-01-26T00:00:00.000","yhat":126405.1553106305},{"ds":"2026-01-27T00:00:00.000","yhat":126545.3701587904},{"ds":"2026-01-28T00:00:00.000","yhat":126614.2595414091},{"ds":"2026-01-29T00:00:00.000","yhat":126798.5627159131},{"ds":"2026-01-30T00:00:00.000","yhat":126844.9232557469},{"ds":"2026-01-31T00:00:00.000","yhat":126984.6499698489},{"ds":"2026-02-01T00:00:00.000","yhat":127115.5405147208},{"ds":"2026-02-02T00:00:00.000","yhat":127258.1026387905},{"ds":"2026-02-03T00:00:00.000","yhat":127471.3811348446},{"ds":"2026-02-04T00:00:00.000","yhat":127612.1751272307},{"ds":"2026-02-05T00:00:00.000","yhat":127865.66863312},{"ds":"2026-02-06T00:00:00.000","yhat":127976.9960136016},{"ds":"2026-02-07T00:00:00.000","yhat":128176.0409257739},{"ds":"2026-02-08T00:00:00.000","yhat":128359.2961834358},{"ds":"2026-02-09T00:00:00.000","yhat":128546.1184974974},{"ds":"2026-02-10T00:00:00.000","yhat":128794.5852682951},{"ds":"2026-02-11T00:00:00.000","yhat":128960.7372428879},{"ds":"2026-02-12T00:00:00.000","yhat":129229.2292757054},{"ds":"2026-02-13T00:00:00.000","yhat":129344.9102399163},{"ds":"2026-02-14T00:00:00.000","yhat":129537.6302810927},{"ds":"2026-02-15T00:00:00.000","yhat":129704.1025624368},{"ds":"2026-02-16T00:00:00.000","yhat":129864.1533835968},{"ds":"2026-02-17T00:00:00.000","yhat":130076.5679289444},{"ds":"2026-02-18T00:00:00.000","yhat":130198.3157136234},{"ds":"2026-02-19T00:00:00.000","yhat":130415.1783866336},{"ds":"2026-02-20T00:00:00.000","yhat":130473.301514409},{"ds":"2026-02-21T00:00:00.000","yhat":130603.9692530457},{"ds":"2026-02-22T00:00:00.000","yhat":130705.4298968221},{"ds":"2026-02-23T00:00:00.000","yhat":130799.1071231997},{"ds":"2026-02-24T00:00:00.000","yhat":130945.405203209},{"ds":"2026-02-25T00:00:00.000","yhat":131002.8933064338},{"ds":"2026-02-26T00:00:00.000","yhat":131158.8926401562},{"ds":"2026-02-27T00:00:00.000","yhat":131160.98911677},{"ds":"2026-02-28T00:00:00.000","yhat":131241.7714896555},{"ds":"2026-03-01T00:00:00.000","yhat":131300.6239106463},{"ds":"2026-03-02T00:00:00.000","yhat":131359.9086019633},{"ds":"2026-03-03T00:00:00.000","yhat":131480.7476676184},{"ds":"2026-03-04T00:00:00.000","yhat":131522.1897923442},{"ds":"2026-03-05T00:00:00.000","yhat":131671.7860322411},{"ds":"2026-03-06T00:00:00.000","yhat":131677.0976888295},{"ds":"2026-03-07T00:00:00.000","yhat":131770.4363289962},{"ds":"2026-03-08T00:00:00.000","yhat":131850.6648474536},{"ds":"2026-03-09T00:00:00.000","yhat":131939.3950306489},{"ds":"2026-03-10T00:00:00.000","yhat":132096.7902419899},{"ds":"2026-03-11T00:00:00.000","yhat":132180.7584110108},{"ds":"2026-03-12T00:00:00.000","yhat":132377.5588202341},{"ds":"2026-03-13T00:00:00.000","yhat":132433.3448452532},{"ds":"2026-03-14T00:00:00.000","yhat":132578.9417713479},{"ds":"2026-03-15T00:00:00.000","yhat":132711.6875666007},{"ds":"2026-03-16T00:00:00.000","yhat":132851.6710039884},{"ds":"2026-03-17T00:00:00.000","yhat":133057.5746650778},{"ds":"2026-03-18T00:00:00.000","yhat":133185.906929494},{"ds":"2026-03-19T00:00:00.000","yhat":133421.6454035961},{"ds":"2026-03-20T00:00:00.000","yhat":133509.8129699624},{"ds":"2026-03-21T00:00:00.000","yhat":133680.2846998659},{"ds":"2026-03-22T00:00:00.000","yhat":133829.6527442503},{"ds":"2026-03-23T00:00:00.000","yhat":133977.4829684759},{"ds":"2026-03-24T00:00:00.000","yhat":134182.1703903458},{"ds":"2026-03-25T00:00:00.000","yhat":134300.1772191015},{"ds":"2026-03-26T00:00:00.000","yhat":134516.6758169179},{"ds":"2026-03-27T00:00:00.000","yhat":134577.1178103111},{"ds":"2026-03-28T00:00:00.000","yhat":134712.0278153966},{"ds":"2026-03-29T00:00:00.000","yhat":134818.8492835788},{"ds":"2026-03-30T00:00:00.000","yhat":134918.1767820859},{"ds":"2026-03-31T00:00:00.000","yhat":135069.5824604376},{"ds":"2026-04-01T00:00:00.000","yhat":135130.8213150917},{"ds":"2026-04-02T00:00:00.000","yhat":135288.4384884526},{"ds":"2026-04-03T00:00:00.000","yhat":135289.3008188945},{"ds":"2026-04-04T00:00:00.000","yhat":135365.3521420029},{"ds":"2026-04-05T00:00:00.000","yhat":135415.4209041733},{"ds":"2026-04-06T00:00:00.000","yhat":135461.415446657},{"ds":"2026-04-07T00:00:00.000","yhat":135564.1157151576},{"ds":"2026-04-08T00:00:00.000","yhat":135582.3469440186},{"ds":"2026-04-09T00:00:00.000","yhat":135703.5593951451},{"ds":"2026-04-10T00:00:00.000","yhat":135675.3370964752},{"ds":"2026-04-11T00:00:00.000","yhat":135730.1356729696},{"ds":"2026-04-12T00:00:00.000","yhat":135767.0782727955},{"ds":"2026-04-13T00:00:00.000","yhat":135808.1452255937},{"ds":"2026-04-14T00:00:00.000","yhat":135913.9662970518},{"ds":"2026-04-15T00:00:00.000","yhat":135943.0010260668},{"ds":"2026-04-16T00:00:00.000","yhat":136082.1309926341},{"ds":"2026-04-17T00:00:00.000","yhat":136078.1865673556},{"ds":"2026-04-18T00:00:00.000","yhat":136162.7076915354},{"ds":"2026-04-19T00:00:00.000","yhat":136233.7670124238},{"ds":"2026-04-20T00:00:00.000","yhat":136312.1902179472},{"ds":"2026-04-21T00:00:00.000","yhat":136457.3815509437},{"ds":"2026-04-22T00:00:00.000","yhat":136526.539038571},{"ds":"2026-04-23T00:00:00.000","yhat":136705.2822950217},{"ds":"2026-04-24T00:00:00.000","yhat":136739.2144470302},{"ds":"2026-04-25T00:00:00.000","yhat":136858.7167465068},{"ds":"2026-04-26T00:00:00.000","yhat":136960.8032546103},{"ds":"2026-04-27T00:00:00.000","yhat":137065.3695719321},{"ds":"2026-04-28T00:00:00.000","yhat":137231.0428198357},{"ds":"2026-04-29T00:00:00.000","yhat":137314.416749694},{"ds":"2026-04-30T00:00:00.000","yhat":137500.6943132198},{"ds":"2026-05-01T00:00:00.000","yhat":137535.2588665334},{"ds":"2026-05-02T00:00:00.000","yhat":137648.472353447},{"ds":"2026-05-03T00:00:00.000","yhat":137737.5277967167},{"ds":"2026-05-04T00:00:00.000","yhat":137822.6901804238},{"ds":"2026-05-05T00:00:00.000","yhat":137963.1331971225},{"ds":"2026-05-06T00:00:00.000","yhat":138016.1561567644},{"ds":"2026-05-07T00:00:00.000","yhat":138167.8039498333},{"ds":"2026-05-08T00:00:00.000","yhat":138164.4119189959},{"ds":"2026-05-09T00:00:00.000","yhat":138237.3747688285},{"ds":"2026-05-10T00:00:00.000","yhat":138284.9677061212},{"ds":"2026-05-11T00:00:00.000","yhat":138328.5548123643},{"ds":"2026-05-12T00:00:00.000","yhat":138428.3930688358},{"ds":"2026-05-13T00:00:00.000","yhat":138442.8172792808},{"ds":"2026-05-14T00:00:00.000","yhat":138558.8297048516},{"ds":"2026-05-15T00:00:00.000","yhat":138523.6171358911},{"ds":"2026-05-16T00:00:00.000","yhat":138569.2953238704},{"ds":"2026-05-17T00:00:00.000","yhat":138594.7096608915},{"ds":"2026-05-18T00:00:00.000","yhat":138621.6276850159},{"ds":"2026-05-19T00:00:00.000","yhat":138710.5322742238},{"ds":"2026-05-20T00:00:00.000","yhat":138719.8010700401},{"ds":"2026-05-21T00:00:00.000","yhat":138836.2960872482},{"ds":"2026-05-22T00:00:00.000","yhat":138806.8862182572},{"ds":"2026-05-23T00:00:00.000","yhat":138863.2023826266},{"ds":"2026-05-24T00:00:00.000","yhat":138903.4538850013},{"ds":"2026-05-25T00:00:00.000","yhat":138948.6410939101},{"ds":"2026-05-26T00:00:00.000","yhat":139058.3727105027},{"ds":"2026-05-27T00:00:00.000","yhat":139090.0724638293},{"ds":"2026-05-28T00:00:00.000","yhat":139229.5983943703},{"ds":"2026-05-29T00:00:00.000","yhat":139222.7965721724},{"ds":"2026-05-30T00:00:00.000","yhat":139300.2880951013},{"ds":"2026-05-31T00:00:00.000","yhat":139359.3170084652},{"ds":"2026-06-01T00:00:00.000","yhat":139419.9933456903},{"ds":"2026-06-02T00:00:00.000","yhat":139541.1386813707},{"ds":"2026-06-03T00:00:00.000","yhat":139579.518215401},{"ds":"2026-06-04T00:00:00.000","yhat":139720.4818147948},{"ds":"2026-06-05T00:00:00.000","yhat":139709.5352278602},{"ds":"2026-06-06T00:00:00.000","yhat":139777.1398055382},{"ds":"2026-06-07T00:00:00.000","yhat":139820.5679955839},{"ds":"2026-06-08T00:00:00.000","yhat":139860.1485790764},{"ds":"2026-06-09T00:00:00.000","yhat":139955.10896192},{"ds":"2026-06-10T00:00:00.000","yhat":139962.7986147756},{"ds":"2026-06-11T00:00:00.000","yhat":140069.3163136981},{"ds":"2026-06-12T00:00:00.000","yhat":140021.0627660778},{"ds":"2026-06-13T00:00:00.000","yhat":140049.5174601764},{"ds":"2026-06-14T00:00:00.000","yhat":140053.0676265991},{"ds":"2026-06-15T00:00:00.000","yhat":140053.224005315},{"ds":"2026-06-16T00:00:00.000","yhat":140110.4315361015},{"ds":"2026-06-17T00:00:00.000","yhat":140083.2599294733},{"ds":"2026-06-18T00:00:00.000","yhat":140158.9976683132},{"ds":"2026-06-19T00:00:00.000","yhat":140085.1719320531},{"ds":"2026-06-20T00:00:00.000","yhat":140094.2941731278},{"ds":"2026-06-21T00:00:00.000","yhat":140085.6600851004},{"ds":"2026-06-22T00:00:00.000","yhat":140081.5394434381},{"ds":"2026-06-23T00:00:00.000","yhat":140142.9646390662},{"ds":"2026-06-24T00:00:00.000","yhat":140128.9034599674},{"ds":"2026-06-25T00:00:00.000","yhat":140226.8401492372},{"ds":"2026-06-26T00:00:00.000","yhat":140184.2875771262},{"ds":"2026-06-27T00:00:00.000","yhat":140233.5304611496},{"ds":"2026-06-28T00:00:00.000","yhat":140273.4284319088},{"ds":"2026-06-29T00:00:00.000","yhat":140325.614336968},{"ds":"2026-06-30T00:00:00.000","yhat":140450.2963707187},{"ds":"2026-07-01T00:00:00.000","yhat":140505.4492170089},{"ds":"2026-07-02T00:00:00.000","yhat":140677.4177390937},{"ds":"2026-07-03T00:00:00.000","yhat":140712.4554495569},{"ds":"2026-07-04T00:00:00.000","yhat":140841.4969956538},{"ds":"2026-07-05T00:00:00.000","yhat":140961.9926850025},{"ds":"2026-07-06T00:00:00.000","yhat":141094.1396187696},{"ds":"2026-07-07T00:00:00.000","yhat":141296.7171653758},{"ds":"2026-07-08T00:00:00.000","yhat":141426.3111003165},{"ds":"2026-07-09T00:00:00.000","yhat":141667.9491025401},{"ds":"2026-07-10T00:00:00.000","yhat":141766.6690356192},{"ds":"2026-07-11T00:00:00.000","yhat":141952.3185057785},{"ds":"2026-07-12T00:00:00.000","yhat":142121.4130587332},{"ds":"2026-07-13T00:00:00.000","yhat":142293.3870169047}]
    },
    "ETH": {
        "name": "Ethereum",
        "symbol": "ETH",
        "current_price": 3062.60,
        "color": "#FFC185",
        "data": [{"ds":"2025-08-09T00:00:00.000","yhat":3062.6010640787},{"ds":"2025-08-10T00:00:00.000","yhat":3062.4501449242},{"ds":"2025-08-11T00:00:00.000","yhat":3061.4276760912},{"ds":"2025-08-12T00:00:00.000","yhat":3061.5076691885},{"ds":"2025-08-13T00:00:00.000","yhat":3056.8896295236},{"ds":"2025-08-14T00:00:00.000","yhat":3059.1890121718},{"ds":"2025-08-15T00:00:00.000","yhat":3055.7955556912}]
    },
    "DOGE": {
        "name": "Dogecoin",
        "symbol": "DOGE",
        "current_price": 0.24,
        "color": "#B4413C",
        "data": [{"ds":"2025-08-09T00:00:00.000","yhat":0.2411475515},{"ds":"2025-08-10T00:00:00.000","yhat":0.2418425341},{"ds":"2025-08-11T00:00:00.000","yhat":0.2424994612},{"ds":"2025-08-12T00:00:00.000","yhat":0.2428435555},{"ds":"2025-08-13T00:00:00.000","yhat":0.243375552},{"ds":"2025-08-14T00:00:00.000","yhat":0.2442734268},{"ds":"2025-08-15T00:00:00.000","yhat":0.2448089281}]
    },
    "GOLD": {
        "name": "Gold",
        "symbol": "GOLD",
        "current_price": 83155.12,
        "color": "#ECEBD5",
        "data": [{"ds":"2025-08-09T00:00:00.000","yhat":83155.1218602679},{"ds":"2025-08-10T00:00:00.000","yhat":83146.1431563555},{"ds":"2025-08-11T00:00:00.000","yhat":83231.7849610329},{"ds":"2025-08-12T00:00:00.000","yhat":83249.4065334721},{"ds":"2025-08-13T00:00:00.000","yhat":83273.2843494916},{"ds":"2025-08-14T00:00:00.000","yhat":83309.9239946405},{"ds":"2025-08-15T00:00:00.000","yhat":83361.6844124788}]
    }
};

// Global variables
let currentChart = null;
let currentData = [];
let currentPage = 1;
const rowsPerPage = 10;

// DOM elements
const elements = {
    cryptoSelect: document.getElementById('crypto-select'),
    startDate: document.getElementById('start-date'),
    endDate: document.getElementById('end-date'),
    dateError: document.getElementById('date-error'),
    generateBtn: document.getElementById('generate-forecast'),
    btnText: document.getElementById('btn-text'),
    btnLoading: document.getElementById('btn-loading'),
    currentPrice: document.getElementById('current-price'),
    predictedPrice: document.getElementById('predicted-price'),
    forecastChange: document.getElementById('forecast-change'),
    forecastPeriod: document.getElementById('forecast-period'),
    chartCanvas: document.getElementById('forecast-chart'),
    tableBody: document.getElementById('table-body'),
    pagination: document.getElementById('pagination'),
    paginationInfo: document.getElementById('pagination-info')
};

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    initializeDefaults();
    setupEventListeners();
    generateForecast();
});

function initializeDefaults() {
    // Set default cryptocurrency to BTC
    elements.cryptoSelect.value = 'BTC';
    
    // Set default date range (last 30 days of BTC data)
    const btcData = cryptoData.BTC.data;
    const lastDate = new Date(btcData[btcData.length - 1].ds);
    const startDate = new Date(lastDate);
    startDate.setDate(startDate.getDate() - 30);
    
    elements.endDate.value = formatDateForInput(lastDate);
    elements.startDate.value = formatDateForInput(startDate);
}

function setupEventListeners() {
    elements.cryptoSelect.addEventListener('change', validateAndGenerate);
    elements.startDate.addEventListener('change', validateDates);
    elements.endDate.addEventListener('change', validateDates);
    elements.generateBtn.addEventListener('click', generateForecast);
}

function formatDateForInput(date) {
    return date.toISOString().split('T')[0];
}

function validateDates() {
    const startDate = new Date(elements.startDate.value);
    const endDate = new Date(elements.endDate.value);
    
    if (startDate >= endDate) {
        elements.dateError.style.display = 'block';
        elements.generateBtn.disabled = true;
        return false;
    } else {
        elements.dateError.style.display = 'none';
        elements.generateBtn.disabled = false;
        return true;
    }
}

function validateAndGenerate() {
    if (validateDates()) {
        generateForecast();
    }
}

function generateForecast() {
    if (!validateDates()) return;
    
    showLoading(true);
    
    setTimeout(() => {
        const selectedCrypto = elements.cryptoSelect.value;
        const startDate = elements.startDate.value;
        const endDate = elements.endDate.value;
        
        // Filter data based on date range
        const filteredData = filterDataByDateRange(selectedCrypto, startDate, endDate);
        currentData = processData(filteredData, selectedCrypto);
        
        // Update all sections
        updateMetrics(selectedCrypto, currentData);
        updateChart(selectedCrypto, currentData);
        updateTable(currentData);
        
        showLoading(false);
    }, 500);
}

function showLoading(show) {
    if (show) {
        elements.btnText.style.display = 'none';
        elements.btnLoading.style.display = 'inline';
        elements.generateBtn.disabled = true;
        document.querySelector('.main-content').classList.add('loading');
    } else {
        elements.btnText.style.display = 'inline';
        elements.btnLoading.style.display = 'none';
        elements.generateBtn.disabled = false;
        document.querySelector('.main-content').classList.remove('loading');
    }
}

function filterDataByDateRange(crypto, startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    return cryptoData[crypto].data.filter(item => {
        const itemDate = new Date(item.ds);
        return itemDate >= start && itemDate <= end;
    });
}

function processData(data, crypto) {
    const processedData = [];
    
    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        const prevItem = i > 0 ? data[i - 1] : null;
        
        const dailyChange = prevItem ? item.yhat - prevItem.yhat : 0;
        const changePercent = prevItem ? ((dailyChange / prevItem.yhat) * 100) : 0;
        
        let trend = '→';
        if (changePercent > 0.1) trend = '↗';
        else if (changePercent < -0.1) trend = '↘';
        
        processedData.push({
            date: new Date(item.ds),
            price: item.yhat,
            dailyChange: dailyChange,
            changePercent: changePercent,
            trend: trend,
            formattedDate: formatDate(new Date(item.ds)),
            formattedPrice: formatPrice(item.yhat, crypto),
            formattedChange: formatPrice(Math.abs(dailyChange), crypto),
            formattedPercent: changePercent.toFixed(2) + '%'
        });
    }
    
    return processedData;
}

function updateMetrics(crypto, data) {
    if (data.length === 0) return;
    
    const cryptoInfo = cryptoData[crypto];
    const currentPrice = cryptoInfo.current_price;
    const predictedPrice = data[data.length - 1].price;
    const forecastChange = ((predictedPrice - currentPrice) / currentPrice) * 100;
    const forecastPeriod = data.length;
    
    elements.currentPrice.textContent = formatPrice(currentPrice, crypto);
    elements.predictedPrice.textContent = formatPrice(predictedPrice, crypto);
    elements.forecastChange.textContent = (forecastChange >= 0 ? '+' : '') + forecastChange.toFixed(2) + '%';
    elements.forecastPeriod.textContent = forecastPeriod + ' days';
    
    // Add color classes
    elements.forecastChange.className = 'metric-value ' + (forecastChange >= 0 ? 'positive' : 'negative');
}

function updateChart(crypto, data) {
    const ctx = elements.chartCanvas.getContext('2d');
    
    // Destroy existing chart
    if (currentChart) {
        currentChart.destroy();
    }
    
    const cryptoInfo = cryptoData[crypto];
    
    currentChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.map(item => item.formattedDate),
            datasets: [{
                label: `${cryptoInfo.name} Price`,
                data: data.map(item => item.price),
                borderColor: cryptoInfo.color,
                backgroundColor: cryptoInfo.color + '20',
                borderWidth: 2,
                fill: true,
                tension: 0.1,
                pointBackgroundColor: cryptoInfo.color,
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        color: getComputedStyle(document.documentElement).getPropertyValue('--color-text').trim(),
                        font: {
                            size: 12,
                            weight: '500'
                        }
                    }
                },
                tooltip: {
                    backgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--color-surface').trim(),
                    titleColor: getComputedStyle(document.documentElement).getPropertyValue('--color-text').trim(),
                    bodyColor: getComputedStyle(document.documentElement).getPropertyValue('--color-text').trim(),
                    borderColor: getComputedStyle(document.documentElement).getPropertyValue('--color-border').trim(),
                    borderWidth: 1,
                    callbacks: {
                        label: function(context) {
                            return `Price: ${formatPrice(context.parsed.y, crypto)}`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: getComputedStyle(document.documentElement).getPropertyValue('--color-text-secondary').trim(),
                        maxTicksLimit: 10
                    },
                    grid: {
                        color: getComputedStyle(document.documentElement).getPropertyValue('--color-border').trim() + '40'
                    }
                },
                y: {
                    ticks: {
                        color: getComputedStyle(document.documentElement).getPropertyValue('--color-text-secondary').trim(),
                        callback: function(value) {
                            return formatPrice(value, crypto);
                        }
                    },
                    grid: {
                        color: getComputedStyle(document.documentElement).getPropertyValue('--color-border').trim() + '40'
                    }
                }
            },
            interaction: {
                intersect: false,
                mode: 'index'
            }
        }
    });
}

function updateTable(data) {
    currentPage = 1;
    renderTable(data);
    renderPagination(data);
}

function renderTable(data) {
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const pageData = data.slice(startIndex, endIndex);
    
    let html = '';
    
    pageData.forEach((item, index) => {
        const changeClass = item.changePercent > 0 ? 'positive' : item.changePercent < 0 ? 'negative' : '';
        const trendClass = item.trend === '↗' ? 'trend-up' : item.trend === '↘' ? 'trend-down' : 'trend-flat';
        
        html += `
            <tr>
                <td>${item.formattedDate}</td>
                <td>${item.formattedPrice}</td>
                <td class="price-change ${changeClass}">
                    ${item.changePercent >= 0 ? '+' : '-'}${item.formattedChange}
                </td>
                <td class="price-change ${changeClass}">${item.formattedPercent}</td>
                <td><span class="trend-indicator ${trendClass}">${item.trend}</span></td>
            </tr>
        `;
    });
    
    elements.tableBody.innerHTML = html;
    
    // Update pagination info
    const startItem = startIndex + 1;
    const endItem = Math.min(endIndex, data.length);
    elements.paginationInfo.textContent = `Showing ${startItem} - ${endItem} of ${data.length} records`;
}

function renderPagination(data) {
    const totalPages = Math.ceil(data.length / rowsPerPage);
    
    let html = '';
    
    // Previous button
    html += `
        <button class="pagination-btn" ${currentPage === 1 ? 'disabled' : ''} onclick="changePage(${currentPage - 1})">
            Previous
        </button>
    `;
    
    // Page numbers
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage < maxVisiblePages - 1) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
        html += `
            <button class="pagination-btn ${i === currentPage ? 'active' : ''}" onclick="changePage(${i})">
                ${i}
            </button>
        `;
    }
    
    // Next button
    html += `
        <button class="pagination-btn" ${currentPage === totalPages ? 'disabled' : ''} onclick="changePage(${currentPage + 1})">
            Next
        </button>
    `;
    
    elements.pagination.innerHTML = html;
}

function changePage(page) {
    const totalPages = Math.ceil(currentData.length / rowsPerPage);
    
    if (page >= 1 && page <= totalPages) {
        currentPage = page;
        renderTable(currentData);
        renderPagination(currentData);
    }
}

function formatPrice(price, crypto) {
    if (crypto === 'DOGE') {
        return '$' + price.toFixed(4);
    } else if (crypto === 'ETH') {
        return '$' + price.toFixed(2);
    } else {
        return '$' + price.toLocaleString('en-US', { 
            minimumFractionDigits: 2, 
            maximumFractionDigits: 2 
        });
    }
}

function formatDate(date) {
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: '2-digit'
    });
}

// Make changePage function global for onclick handlers
window.changePage = changePage;