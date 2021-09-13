import React from "react";

function TFrom({
        prodId, setProdId,
        abbr, setAbbr,
        effectiveDate, setEffectiveDate,
        paymentAmount, setPaymentAmount,
        sourceType, setSourceType,
        paymentType, setPaymentType,
        taxYear, setTaxYear,
        allocMethod, setAllocMethod
}) {
    /*
        
    */
    return (
        <tbody>
              <tr>
                  <td>
                      <input
                          type="text"
                          value={prodId}
                          onChange={e => setProdId(e.target.value)}
                      />
                  </td>
                  <td>
                      <input
                          type="number"
                          value={abbr}
                          onChange={e => setAbbr(e.target.value)}
                      />
                  </td>
                  <td>
                      <input
                          type="date"
                          value={effectiveDate}
                          onChange={e => setEffectiveDate(e.target.value)}
                      />
                  </td>
                  <td>
                      <input
                          type="number"
                          value={paymentAmount}
                          onChange={e => setPaymentAmount(e.target.value)}
                      />
                  </td>
                  <td>
                      <input
                          type="number"
                          value={sourceType}
                          onChange={e => setSourceType(e.target.value)}
                      />
                  </td>
                  <td>
                      <input
                          type="text"
                          value={paymentType}
                          onChange={e => setPaymentType(e.target.value)}
                      />
                  </td>
                  <td>
                      <input
                          type="text"
                          value={taxYear}
                          onChange={e => setTaxYear(e.target.value)}
                      />
                  </td>
                  <td>
                      <input
                          type="text"
                          value={allocMethod}
                          onChange={e => setAllocMethod(e.target.value)}
                      />
                  </td>
                  </tr>
        </tbody>
    )
}

export default TFrom
