$(items).each(function(k, v) {
    function handleRipple(api){
        $.getJSON(api, function(data){
            getDT = data.result;
            kirimKesana();
        });
    }
    function handleGulag(api){
        $.getJSON(api, function(data){
            getDT = data.counts.online;
            kirimKesana();
        });
    }
    function SpecialRipple(api){
        $.getJSON(api, function(data){
            getDT = data.connected_users;
            kirimKesana();
        })
    }
    var data;
    switch(v.instances){
      case 0:
          // ENDPOINT A
          crot = handleRipple(v.onlineAPI);
          break;
      case 1:
          // ENDPOINT B
          crot = handleGulag(v.onlineAPI);
          break;
      case 2:
          // HANDLING SPECIAL FOR RIPPLE
          crot = SpecialRipple(v.onlineAPI);
      default:
          getDT = null;
    }
    function kirimKesana(){
      $("#app tbody").append(
          "<tr class='bg-white border-b dark:bg-gray-800 dark:border-gray-700'><th scope='row' class='flex items-center space-x-4 px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap name'><img class='w-12 py-4 md:w-12 lg:w-12 rounded' src='"+v.logo+"'/> <span><a href='"+v.link+"'>"+v.name+"</a></span></td><td class='owner px-6 py-4'>"+v.owner+"</td><td class='location px-6 py-4'><img class='w-12 md:w-12 lg:w-12 rounded' src='https://countryflagsapi.com/svg/"+v.location+"'/></td><td class='online px-6 py-4'>"+getDT+"</td><td class='discord px-6 py-4'><a href='"+v.discord+"'><button type='button' class='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>Discord</button></a></td></tr>")
    }
});

var options = {
valueNames: ['name', 'owner', 'location', 'online', 'discord']
};
var list = new List('list-container', options);