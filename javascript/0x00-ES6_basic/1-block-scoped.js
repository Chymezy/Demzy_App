/**
    Given what you’ve read about var and hoisting, 
    modify the variables inside the function taskBlock 
    so that the variables aren’t overwritten inside the conditional block.

    export default function taskBlock(trueOrFalse) {
    var task = false;
    var task2 = true;

    if (trueOrFalse) {
        var task = true;
        var task2 = false;
    }

    return [task, task2];
    }
 */
    export default function taskBlock(trueOrFalse) {
        const task = false;
        const task2 = true;
      
        if (trueOrFalse) {
          const task = true;
          const task2 = false;
          if (task && task2) {
            return [task, task2];
          }
        }
      
        return [task, task2];
      }
      