/**
 * @author russo and dariel
 */
YUI().use('node', 'yql','json','datatable','datatable-sort', function(Y){				
				//query
			var query = "select * from html where url='http://jlcabrera.pgafan.net/computadoras/pc-de-escritorio/' and xpath='//table[@class=\"adsterix_set\"]//tr//td//a'";
				Y.YQL(query,function(r){
					
					(new Y.DataTable({
						data: r.query.results.a,
						columns: [
							{
								key:'span',
								label:'precio',
								sortable:true
								
							},
							{
								key:'content',
								label:'Descripci&oacute;n',
								sortable:true
								
							},
							{
								key:'href',
								label:'Link'
								
							}
						]
					}).render('body'));
					
					Y.one('#loader').remove();
					
				});

});