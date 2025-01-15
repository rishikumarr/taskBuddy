const formatDate = (dateStr: string): string => {
    const date = new Date(dateStr);
    const day = date.getDate();
    const monthName = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();

    return `${day} ${monthName} ${year}`;
};

export default formatDate;
