!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n.__locale__vi=n.__locale__vi||{},n.__locale__vi.js=t())}(this,function(){"use strict";var n={after:function(n,t){return n+" phải xuất hiện sau  "+t[0]+"."},alpha_dash:function(n){return n+" có thể chứa các kí tự chữ, số, gạch ngang và gạch dưới."},alpha_num:function(n){return n+" chỉ có thể chứa các kí tự chữ và số."},alpha:function(n){return n+" chỉ có thể chứa các kí tự chữ."},before:function(n,t){return n+" phải xuất hiện trước "+t[0]+"."},between:function(n,t){return n+" phải có giá trị nằm trong khoảng giữa "+t[0]+" và "+t[1]+"."},confirmed:function(n,t){return n+" khác với "+t[0]+"."},date_between:function(n,t){return n+" phải có giá trị nằm trong khoảng giữa  "+t[0]+" và "+t[1]+"."},date_format:function(n,t){return n+" phải có giá trị dưới định dạng "+t[0]+"."},decimal:function(n,t){void 0===t&&(t=["*"]);var i=t[0];return n+" chỉ có thể chứa các kí tự số và dấu thập phân "+("*"===i?"":i)+"."},digits:function(n,t){return"Trường "+n+" chỉ có thể chứa các kí tự số và bắt buộc phải có độ dài là "+t[0]+"."},dimensions:function(n,t){return n+" phải có chiều rộng "+t[0]+" pixels và chiều cao "+t[1]+" pixels."},email:function(n){return n+" phải là một địa chỉ email hợp lệ."},ext:function(n){return n+" phải là một tệp."},image:function(n){return"Trường "+n+" phải là một ảnh."},in:function(n){return n+" phải là một giá trị."},ip:function(n){return n+" phải là một địa chỉ ip hợp lệ."},max:function(n,t){return n+" không thể có nhiều hơn "+t[0]+" kí tự."},mimes:function(n){return n+" phải chứa kiểu tệp phù hợp."},min:function(n,t){return n+" phải chứa ít nhất "+t[0]+" kí tự."},not_in:function(n){return n+" phải chứa một giá trị hợp lệ."},numeric:function(n){return n+" chỉ có thể có các kí tự số."},regex:function(n){return n+" có định dạng không đúng."},required:function(n){return n+" là bắt buộc."},size:function(n,t){return n+" chỉ có thể chứa tệp nhỏ hơn "+t[0]+" KB."},url:function(n){return n+" không phải là một địa chỉ URL hợp lệ."}},t={name:"vi",messages:n,attributes:{}};return"undefined"!=typeof VeeValidate&&VeeValidate&&(VeeValidate.Validator,!0)&&VeeValidate.Validator.addLocale(t),t});