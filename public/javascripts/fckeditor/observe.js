function instantiateFCKEditor(partIndex){
	var usedFilter = $('part_' + partIndex +'_filter_id');
	if(usedFilter.value == 'Rich Text'){
		putInEditor(partIndex);
	}
}

function toggleEditor(partIndex){
	var filterId = $('part_' + partIndex + '_filter_id');
	if(filterId.value == 'Rich Text'){
		putInEditor(partIndex);
	} else {
		removeEditor(partIndex);
	}
}

function removeEditor(partIndex){
	var editorInstance = FCKeditorAPI.GetInstance('part_' + partIndex + '_content');
	editorInstance.UpdateLinkedField();
	var editorContainer = $('part_' + partIndex + '_content___Frame');
	if(editorContainer){
		editorContainer.parentNode.removeChild( editorContainer );
	}
	var textareaContainer = $('part_' + partIndex + '_content');
	textareaContainer.style.display = '';
}

function putInEditor(partIndex){
	var oFCKeditor = new FCKeditor('part_'+ partIndex +'_content', '600px', '600px', 'Default');
	var page_type = $F('page_class_name');
  oFCKeditor.ToolbarSet = 'Simple' ;
	oFCKeditor.BasePath = "/javascripts/fckeditor/"
	oFCKeditor.Config['CustomConfigurationsPath'] = '/fckeditor/config?class_name=' + page_type;
	oFCKeditor.Width = '100%' ;
	oFCKeditor.Height = '350' ;
	oFCKeditor.ReplaceTextarea();
}

part_added_bak = part_added;
part_added = function() {
  var partName = $F('part-name-field');
  part_added_bak();
  instantiateFCKEditor(partName);
}
