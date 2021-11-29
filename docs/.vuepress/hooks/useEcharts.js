import * as echarts from 'echarts';
export default function(el) {
  // 初始化 echarts
  const echartInstance = echarts.init(el);
  // echarts 的配置方法
  const setOptions = options => {
    echartInstance.setOption(options);
  };
  // 监听页面尺寸变化
  window.addEventListener('resize', () => {
    echartInstance.resize();
  });
  return {
    echartInstance,
    setOptions,
  };
}
