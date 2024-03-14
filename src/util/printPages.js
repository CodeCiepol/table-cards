export default function printdiv() {
    var header_str = '<html><head><title>' + 'test'  + '</title></head><body>';
    var footer_str = '</body></html>';
    var new_str = 'siema'
    var old_str = document.body.innerHTML;
    document.body.innerHTML = header_str + new_str + footer_str;
    window.print();
    document.body.innerHTML = old_str;
    return false;
  }