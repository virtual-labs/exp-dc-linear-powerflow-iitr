
<div style="font-family: 'Nunito Sans', sans-serif; font-size: 20px;text-align: justify;">
<h2>Introduction</h2>

Previous power flow (PF) model was alternating current power flow (ACPF). We can also formulate the PF equations using a DC power flow (DCPF). It is used in many types of power system studies as it is a good approximation to the ACPF and is much faster, easier to set up and solve.

The following assumptions are taken to derive the expressions for DCPF.

$$
\begin{equation}
    P_{i}=\sum_{j=1}^{n}|V_{i}||V_{j}||Y_{ij}|cos(\theta_{ij}+\delta_{j}-\delta_{i}) \quad \forall i \in n 
\end{equation}
$$
$$
\begin{equation}
    Q_{i}=\sum_{j=1}^{n}|V_{i}||V_{j}||Y_{ij}|sin(\theta_{ij}+\delta_{j}-\delta_{i}) \quad \forall i \in n 
\end{equation}$$

Where, $|V_i|$ and $\delta_i$ are the voltage magnitude and angle at bus $i$, and $|Y_{ij}|$ and $\theta_{ij}$ are the magnitude and angle of the admittance matrix corresponding to the element at $i^{th}$ row and $j^{th}$ column. For a $‘n’$ bus system, there are total $‘2n’$ load flow equations and $‘2n’$ variables.

Assumption 1: Reactive power flows and losses are ignored, $P_{ij}=-P_{ji}$ and $Q_{ij}=Q_{ji}=0$, i.e., equation (2) is ignored.

Assumption 2: Voltage magnitudes are assumed closed to unity, i.e., $|V_{i}|≈1.0$ p.u.

With these two assumptions, the equation (1) is represented as (3), which can be further expanded to get (4).

$$
\begin{align} 
    P_{i}=\sum_{j=1}^{n}|Y_{ij}|cos(\theta_{ij}-\delta_{ij}) \quad \forall i \in n 
\end{align}
$$

$$
\begin{align} 
    ⇒P_{i}=\sum_{j=1}^{n}|Y_{ij}|(cos(\theta_{ij})cos(\delta_{ij})+sin(\theta_{ij})sin(\delta_{ij})) \quad \forall i \in n 
\nonumber \end{align}
$$

$$
\begin{align} 
    ⇒P_{i}=\sum_{j=1}^{n}G_{ij}cos(\delta_{ij})+B_{ij}sin(\delta_{ij}) \quad \forall i \in n 
 \end{align}
$$

Assumption 3: Line resistances are generally much smaller than reactances due to high X/R ratio, $R_{ij}<<X_{ij}$, i.e., $G_{ij}<<B_{ij}$. Based on this assumption, (4) is expressed as (5).

$$
\begin{align} 
    P_{i}=\sum_{j=1}^{n}B_{ij}sin(\delta_{ij}) \quad \forall i \in n 
 \end{align}
$$

Assumption 4: Generally, $\delta_{ij}≈0$, i.e., $sin(\delta_{ij}) =\delta_{ij}$. Equation (5) can be expressed as (6).

$$
\begin{align} 
    P_{i}=\sum_{j=1}^{n}B_{ij}\delta_{ij} \quad \forall i \in n 
 \end{align}
$$

Or simply, $P_{i}=\sum_{j=1}^{n}B_{ij}\delta_{ij} \ \forall i \in n$. Considering these assumptions the line power flow is simplified to $P_{ij}=\frac{\delta_{i}-\delta{j}}{x_{ij}}$, where, $P_i$ and $\delta_i$ are the net injected power and voltage angle at bus $i$, respectively. $P_{ij}$ and $x_{ij}$ are the power flow and reactance of the transmission line between buses $i$ and $j$. $B_{ij}$ is a constant matrix of dimension $(n-1)×(n-1)$, removing the rows and column corresponding to slack bus. The elements of the $B_{ij}$ matrix are negative of the imaginary part of the $Y_{bus}$ matrix formed by ignoring the series resistances in the equivalent – $\pi$ circuits of the transmission lines and setting the taps of off-nominal transformers equal to 1. Based on the power generation and demand, the power injection (excluding slack/reference bus need to be calculated), i.e., $P_i=P_i^G-P_i^D$. Assume the first bus as a slack bus, i.e., $\delta_1=0$, the voltage angles are calculated using $\delta_{i}=[B_{ij}]^{-1} P_i$. With these bus voltage angles, the power flows are calculated using $P_{ij}=\frac{\delta_{i}-\delta{j}}{x_{ij}}$ and generation at the slack bus are calculated as in (7).


$$
\begin{align} 
    P_{1}^{G}=\sum_{\forall j \in 1}B_{1j}\delta_{j} + P_{1}^{D}
 \end{align}
$$
 
The following are the steps for performing the DCPF.

<b>Step 1:</b> Form the $B_{ij}$ matrix. Form the bus injection vector $(P_i)$.

<b>Step 2:</b> Solve linear equation $\delta_{i}=[B_{ij}]^{-1} P_i$  for all buses excluding the slack/reference bus.

<b>Step 3:</b> Compute the line power flows and the injection from the slack bus.   

