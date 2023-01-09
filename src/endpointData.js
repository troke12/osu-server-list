(function(){
    var itemPromises = [];
    function handleRipple(id, api){
        return new Promise(function(ok, fail) {
            $.getJSON(api, function(data){
                ok({id: id, data: data.result});
            }).fail(function(){ fail(); });
        });
    }
    function handleGulag(id, api){
        return new Promise(function(ok, fail) {
            $.getJSON(api, function(data){
                ok({id: id, data: data.counts.online});
            }).fail(function(){ fail(); });
        });
    }
    function SpecialRipple(id, api){
        return new Promise(function(ok, fail) {
            $.getJSON(api, function(data){
                ok({id: id, data: data.connected_users});
            }).fail(function(){ fail(); });
        });
    }
    function kirimKesana(instanceData, onlineData){
        $("#app tbody").append(
            "<tr class='bg-stone-900'><td scope='row' class='flex flex-wrap items-center space-x-4 px-6 py-4 font-medium text-white whitespace-nowrap name'><img class='w-12 py-4' src='"+instanceData.logo+"'/><a href='"+instanceData.link+"'>"+instanceData.name+"</a></td><td class='owner py-4 text-left'>"+instanceData.owner+"</td><td class='location px-6 py-4'><img class='w-12 rounded' src='https://www.countryflagicons.com/FLAT/64/"+instanceData.location+".png'/></td><td class='online px-6 py-4'>"+onlineData+"</td><td class='discord px-6 py-4 text-center'><a href='"+instanceData.discord+"'><button type='button' class='inline-block px-6 pt-2.5 pb-2 bg-purple-900 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-purple-400 hover:shadow-lg focus:bg-purple-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out flex align-center'><svg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='download' class='w-5 mr-2' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512'><path d='M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z'/></svg>Discord</button></a></td></tr>")
    }
    $(items).each(function(k, v) {
        var promise;
        switch(v.instances){
        case 0:
            // ENDPOINT A
            promise = handleRipple(k, v.onlineAPI);
            break;
        case 1:
            // ENDPOINT B
            promise = handleGulag(k, v.onlineAPI);
            break;
        case 2:
            // HANDLING SPECIAL FOR RIPPLE
            promise = SpecialRipple(k, v.onlineAPI);
            break;
        default:
            return true;
        }
        promise && itemPromises.push(promise);
    });
    var options = {
        valueNames: ['name', 'owner', 'location', 'online', 'discord']
    };
    var list = new List('list-container', options);
    Promise.allSettled(itemPromises).then(function(promiseData) {
        promiseData.forEach(function(promiseResponse, i) {
            if(promiseResponse.status == 'rejected') {
                console.warn(items[i].name, "server encountered an error. Ignoring this.", promiseResponse.reason);
                return;
            }
            kirimKesana(items[i], promiseResponse.value.data);
        });
    });
}).call(this);

