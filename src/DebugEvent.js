var DebugEvent = {
    // 获取节点绑定的事件
    /*
    使用实例：
    1. DebugEvent.GetEvents($("#test4")[0]);
    2. DebugEvent.GetEvents($("a")[0]);
     */
    GetEvents: function (node) {
        /*
        if (typeof (node) === "String") {
            node = $(node);
        }else if(typeof node === "object")
        {
        }
        */
        if (node.tagName == null)
            return [];
        var arr = [];
        for (var element in node) {
            //console.log(element + ":" + node[element]);
            if (element.substr(0, 2) == "on" && element != null && node[element] != null) {
                console.log(element + ":" + node[element]);
                var name = element.toString();
                var value = node[element].toString();
                arr.push({ name: value });
            }
        }
        return arr;
    }
}

