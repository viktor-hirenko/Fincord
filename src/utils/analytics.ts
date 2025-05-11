/**
 * Утилита для отправки событий в Google Analytics
 */

/**
 * Отправляет событие в Google Analytics и дублирует его в консоль
 * @param eventName - Название события
 * @param eventData - Дополнительные данные события
 */
export const sendAnalyticsEvent = (eventName: string, eventData: Record<string, any> = {}) => {
  const analyticsPayload = {
    event: eventName,
    ...eventData
  };
  
  // Инициализация dataLayer, если его нет
  window.dataLayer = window.dataLayer || [];
  
  // Отправка в Google Analytics
  window.dataLayer.push(analyticsPayload);
  
  // Дублирование в консоль для отладки
  console.log(`Analytics Event [${eventName}]:`, analyticsPayload);
}; 