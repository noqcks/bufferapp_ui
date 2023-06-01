import React from 'react';
import Notice from '@bufferapp/ui/Notice';
import Text from '@bufferapp/ui/Text';
export default function ExampleNotice() {
    return (React.createElement(Notice, { dismiss: () => console.log('dismissed!'), type: "note" },
        React.createElement(Text, null, "We're actively working on improving this feature and would love your feedback!")));
}
//# sourceMappingURL=NoticeDismissable.js.map