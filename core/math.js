import { Vector } from "./astronomy.js";


/**
 * 向量加法
 * @param {Vector} v1
 * @param {Vector} v2
 * @returns {Vector}
 */
function add(v1, v2) {
    return new Vector(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z, 0);
}


/**
 * 向量点乘
 * @param {Vector} v1
 * @param {Vector} v2
 * @returns {number}
 */
function dot(v1, v2) {
    return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;
}


/**
 * 向量元素乘
 * @param {number} n
 * @param {Vector} v
 * @returns {Vector}
 */
function multiply(n, v) {
    return new Vector(n * v.x, n * v.y, n * v.z, 0);
}


/**
 * 向量叉乘
 * @param {Vector} v1
 * @param {Vector} v2
 * @returns {Vector}
 */
function cross(v1, v2) {
    return new Vector(
        v1.y * v2.z - v1.z * v2.y,
        v1.z * v2.x - v1.x * v2.z,
        v1.x * v2.y - v1.y * v2.x,
        0
    );
}


/**
 * 向量归一化
 * @param {Vector} v
 * @returns {Vector}
 */
function normalize(v) {
    let length = v.Length();
    return new Vector(v.x / length, v.y / length, v.z / length, 0);
}


/**
 * 角度制转弧度制
 * @param {number} deg 
 * @returns {number}
 */
function deg2Rad(deg) {
    return deg * Math.PI / 180;
}


/**
 * 弧度制转角度制
 * @param {number} rad 
 * @returns {number}
 */
function rad2Deg(rad) {
    return rad * 180 / Math.PI;
}

/**
 * 剔除数组中的指定sigma外的异常值
 * @param {Array<number>} arr
 * @param {number} sigma
 * @returns {Array<number>}
 */
function rejectOutliers(arr, sigma = 2) {
    let mean = arr.reduce((a, b) => a + b) / arr.length;
    let std = Math.sqrt(arr.reduce((a, b) => a + (b - mean) ** 2) / arr.length);
    return arr.filter(x => Math.abs(x - mean) < sigma * std);
}

/**
 * 计算中位数
 * @param {Array<number>} numbers
 * @returns {number}
 */
function calculateMedian(numbers) {
    // 首先对数组进行排序
    numbers.sort((a, b) => a - b);
  
    const middleIndex = Math.floor(numbers.length / 2);
  
    // 判断数组长度是奇数还是偶数
    if (numbers.length % 2 === 0) {
      // 偶数个元素，返回中间两个元素的平均值
      return (numbers[middleIndex - 1] + numbers[middleIndex]) / 2;
    } else {
      // 奇数个元素，返回中间的元素
      return numbers[middleIndex];
    }
}

export {
    add, dot, multiply, cross, normalize,
    deg2Rad, rad2Deg, rejectOutliers, calculateMedian
};