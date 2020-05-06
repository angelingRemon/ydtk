export default {
    //全选
    data: function() {
        return {
            selectItems: [], // 从服务器拿到的数据
        }
    },
    computed: {
        // 全选checkbox绑定的model
        selectAll: {
            get: function() {
                return this.selectCount == this.selectItems.length;
            },
            set: function(value) {
                this.selectItems.forEach(function(item) {
                    item.checked = value;
                });
                return value;
            }
        },
        //选中的数量
        selectCount: {
            get: function() {
                var i = 0;
                this.selectItems.forEach(function(item) {
                    if (item.checked) {
                        i++;
                    }
                });
                return i;
            }
        },
        //选中的数组
        checkedGroups: {
            get: function() {
                var checkedGroups = [];
                this.selectItems.forEach(function(item) {
                    if (item.checked) {
                        checkedGroups.push(item);
                    }
                });
                return checkedGroups;
            }
        }
    }
};