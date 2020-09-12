module.exports = function(req, res, next){
   //middleware adicionando cabeçalhos
   res.header('Access-Control-Allow-Origin', '*')
   res.header('Acess-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT', 'PATCH', 'DELETE')
   res.header('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept')
   next()
}